import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('API Error:', error));
  }, []);

  return (
    <div style={styles.showList}>
      {shows.map((show) => (
        <Link key={show.show.id} to={`/details/${show.show.id}`} style={styles.link}>
          <div style={styles.showCard}>
            <h2 style={styles.showTitle}>{show.show.name}</h2>
            {show.show.image && show.show.image.medium && (
              <img style={styles.showImage} src={show.show.image.medium} alt={show.show.name} />
            )}
            <div
              style={styles.showSummary}
              dangerouslySetInnerHTML={{ __html: show.show.summary }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

const styles = {
  showList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  showCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height:'900px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
    marginBottom: '20px',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  showTitle: {
    marginBottom: '10px',
    fontSize: '1.5em',
    color: '#333',
  },
  showImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  showSummary: {
    color: '#000',
  },
};

export default ShowList;
