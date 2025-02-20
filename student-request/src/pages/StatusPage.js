import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusPage = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get('http://localhost:5167/api/Student/my-application-status', {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Extract status from response data
        setStatus(response.data.status); 
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#003366',
        color: '#fff',
        marginTop: '-100px',
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '2px solid #D50032',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#D50032', fontWeight: 'bold' }}>Request Status</h2>
        <p style={{ fontSize: '18px', color: '#003366' }}>Your current request status:</p>
        <p
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: status === 'Approved' ? 'green' : status === 'Rejected' ? 'red' : '#003366',
          }}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default StatusPage;
