import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailScreen.css';

const DetailScreen = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log('Show Details Data:', data);
        if (data.name && data.image && data.image.original) {
          setShowData(data);
        } else {
          console.error('Invalid show details response:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);


  const styles = {
    showSummary: {
      marginBottom: '15px',
    },
  };

  return (
    <div className="detail-screen-container">
      {showData ? (
        <div>
          <h1>{showData.name}</h1>
          <div className="show-details">
            <img src={showData.image.original} alt={showData.name} className="show-image" />
            <div className="show-info">
              <div
                style={styles.showSummary}
                dangerouslySetInnerHTML={{ __html: showData.summary }}
              />
              <p><b>Status</b> : {showData.status}</p>
              <p><b>Genres</b> : {showData.genres.join(', ')}</p>
              <p><b>Language</b> : {showData.language}</p>
              <p><b>Average Rating</b> : {showData.rating.average}</p>
              <p><b>Runtime</b> : {showData.runtime} minutes</p>
              <p><b>Premiered</b> : {showData.premiered}</p>
              <p><b>Ended</b> : {showData.ended}</p>
              <p><b>Official Site</b>
                 :{' '}
                <a href={showData.officialSite} target="_blank" rel="noopener noreferrer">
                  {showData.officialSite}
                </a>
              </p>
              <p><b>Network</b> : {showData.network.name} - {showData.network.country.name}</p>
              <p><b>Schedule</b> : {showData.schedule.days.join(', ')} at {showData.schedule.time}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailScreen;
