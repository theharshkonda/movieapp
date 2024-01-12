import React from 'react';
import ShowList from './ShowList';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to TV Shows App</h1>
      <ShowList/>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '100%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#000',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px',
  },
  header: {
    color: 'white',
    fontSize: '4em',
    marginBottom: '20px',
  },
};

export default Home;
