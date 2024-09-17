import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element,...rest }) => {
    const email = localStorage.getItem('email');
  
    // If the user has the required role, render the protected route
    if (email === 'admin') {
      return element; // Render the passed element if the user is an admin
    }
  
    // If the user does not have the required role, redirect to the login page
    return <Navigate to="/" replace />;
  };

  export default ProtectedRoute;