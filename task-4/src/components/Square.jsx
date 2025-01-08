import React from 'react';

const Square = ({ color }) => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: color,
        margin: '20px auto',
        border: '2px solid #333',
      }}
    ></div>
  );
};

export default Square;
