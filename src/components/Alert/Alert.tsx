import React from 'react';

const Alert: React.FC = () => {
  return (
    <div className="alert alert-primary w-50 d-flex align-items-center justify-content-between" role="alert">
      <span className="d-block">It's alert!</span>
      <button type="button" className="btn-close d-block" aria-label="Close"></button>
    </div>
  );
};

export default Alert;