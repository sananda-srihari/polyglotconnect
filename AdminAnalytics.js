// AdminAnalytics.js

import React from 'react';
//import { Bar } from 'react-chartjs-2';
import AdminLayout from './AdminLayout';

const AdminAnalytics = () => {
  const data = {
    labels: ['User Engagement', 'Course Popularity', 'Revenue'],
    datasets: [
      {
        label: 'Metrics',
        data: [1500, 1200, 5000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <AdminLayout>
    <div>
      <h2>Analytics and Reporting</h2>
      {/* <Bar data={data} /> */}
    </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
