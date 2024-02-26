// TutorLayout.js
import React from 'react';
import TutorDashboard from './TutorDashboard';

const TutorLayout = ({ children }) => {
  return (
    <div>
      <TutorDashboard />
      {children}
    </div>
  );
};

export default TutorLayout;
