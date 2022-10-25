import React, { useState, useEffect } from 'react';

export default function Health() {
  const [health, setHealth] = useState('');

  useEffect(() => {
    const getHealth = async () => {
      try {
        const res = await fetch('http://localhost:3001/health');
        const data = await res.json();
        setHealth(data);
      } catch (err) {
        return (
          <>
            Error message:
            {err}
          </>
        );
      }
      return null;
    };
    getHealth();
  }, []);
  return (
    <div>
      <h1>
        Status:
        {' '}
        {health.status}
      </h1>
    </div>
  );
}
