import React, { useState } from 'react';

const Slider = () => {
  const [currentPage, setCurrentPage] = useState('CodeFixer');

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'CodeFixer' ? 'Chatbot' : 'CodeFixer');
  };

  return (
    <div>
      <h1>{currentPage}</h1>
      <button onClick={handlePageChange}>Switch Page</button>
    </div>
  );
};

export default Slider;
