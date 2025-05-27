import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroScreen from './components/introscreen.js';
import Login from './pages/login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
