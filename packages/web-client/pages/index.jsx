import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Login from './routes/login';
import Register from './routes/register';
import Home from './routes/home';
import Health from './routes/health';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Router>
      {!isLoading && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      )}
    </Router>
  );
}
