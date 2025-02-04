import React from 'react';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // Mock data for demonstration purposes
  const [requests, setRequests] = useState([]);
  const [metrics, setMetrics] = useState({
    totalRequests: 0,
    approvedRequests: 0,
    pendingRequests: 0,
    rejectedRequests: 0,
    laptopsAvailable: 50,
    laptopsDistributed: 0,
  });

  useEffect(() => {
    // Fetch requests and metrics from API (mocked here for demo purposes)
    const fetchData = async () => {
      // Replace with API calls
      const mockRequests = [
        { id: 1, name: 'John Doe', status: 'Pending', studentId: '123456' },
        { id: 2, name: 'Jane Smith', status: 'Approved', studentId: '789012' },
        { id: 3, name: 'Mark Taylor', status: 'Rejected', studentId: '345678' },
      ];
      const mockMetrics = {
        totalRequests: mockRequests.length,
        approvedRequests: mockRequests.filter(r => r.status === 'Approved').length,
        pendingRequests: mockRequests.filter(r => r.status === 'Pending').length,
        rejectedRequests: mockRequests.filter(r => r.status === 'Rejected').length,
        laptopsAvailable: 50,
        laptopsDistributed: mockRequests.filter(r => r.status === 'Approved').length,
      };
      setRequests(mockRequests);
      setMetrics(mockMetrics);
    };

    fetchData();
  }, []);

  const handleAction = (id, action) => {
    // Mock action handler for approving/rejecting requests
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, status: action } : request
    );
    setRequests(updatedRequests);
  };

  return (
    <div style={{
      backgroundColor: '#003366',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1 style={{ textAlign: 'center', color: '#FFD700' }}></h1>

      {/* Metrics Section */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Total Requests</h3>
          <p>{metrics.totalRequests}</p>
        </div>
        <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Approved</h3>
          <p>{metrics.approvedRequests}</p>
        </div>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Pending</h3>
          <p>{metrics.pendingRequests}</p>
        </div>
        <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Rejected</h3>
          <p>{metrics.rejectedRequests}</p>
        </div>
      </div>

      {/* Request Management Section */}
      <h2 style={{ color: '#FFD700' }}>Request Management</h2>
      <table style={{ width: '100%', backgroundColor: '#ffffff', color: '#000', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Student ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{request.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{request.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{request.studentId}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{request.status}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                {request.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleAction(request.id, 'Approved')}
                      style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '4px' }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(request.id, 'Rejected')}
                      style={{ padding: '5px 10px', backgroundColor: '#D50032', color: '#fff', border: 'none', borderRadius: '4px' }}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notifications Section */}
      <h2 style={{ marginTop: '20px', color: '#FFD700' }}>Notifications</h2>
      <p style={{ textAlign: 'center', color: '#ffffff' }}>
        Approval and rejection notifications will be sent to students via email or SMS.
      </p>
    </div>
  );
};

export default AdminDashboard;
