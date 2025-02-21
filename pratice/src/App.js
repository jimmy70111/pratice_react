import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import './App.css';
import Counter from './counter';
import Task from './task';
import CopyTask from './CopyTask';
import Pratice from './Pratice';
import DogFetcher  from './DogFetcher';

    function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Counter />} /> 
        <Route path='/task' element= {<Task/> } />
        <Route path='/pratice' element= {<Pratice/> } />
        <Route path='/Ctask' element= {<CopyTask/> } />
        <Route path='/Dog' element= {<DogFetcher/> } />

      </Routes>
    </Router>
  );
}

export default App;
