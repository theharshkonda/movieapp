// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DetailsScreen from './components/DetailScreen';// Correct import name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsScreen />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
