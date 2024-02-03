import React from 'react';
import { Pie } from 'react-chartjs-2';
import Navbar from '../common/navbar';

const HodPieChartPage = () => {
  // Mock data for demonstration purposes
  const attendanceData = {
    labels: ['Mathematics', 'Physics', 'English', 'Chemistry'],
    datasets: [
      {
        data: [80, 75, 90, 85],
        backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#e74c3c'],
        hoverBackgroundColor: ['#2980b9', '#27ae60', '#d35400', '#c0392b'],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">HOD Attendance Pie Chart</h2>

        <div className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <Pie
              data={attendanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HodPieChartPage;
