import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import './App.css';
import Counter from './counter';
    function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Counter />} /> 
      </Routes>
    </Router>
  );
}

export default App;
