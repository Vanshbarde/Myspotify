import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedOutComponent = () => {
  return (
    <div>
      <h1>You are logged out</h1>
      <p>Please log in to access your account.</p>
      <Navigate to="/login" />
    </div>
  );
};

export default LoggedOutComponent;
