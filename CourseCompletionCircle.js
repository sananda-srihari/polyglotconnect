// CourseCompletionCircle.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CourseCompletionCircle = ({ percentage }) => {
  return (
    <div style={{ width: '100px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '16px',
          textColor: '#fff',
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default CourseCompletionCircle;
