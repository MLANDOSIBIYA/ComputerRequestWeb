import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [metrics, setMetrics] = useState({
    totalRequests: 0,
    assignedRequests: 0,
    pendingRequests: 0,
    laptopsAvailable: 50,
    laptopsDistributed: 0,
  });

  const [updatingId, setUpdatingId] = useState(null);
  const [updatedRecords, setUpdatedRecords] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:5167/api/Application/get-approved-applications";
        const response = await axios.get(apiUrl);

        console.log("API Response:", response.data);

        const updatedRequests = response.data.map((item) => ({
          id: item.applicationId,
          name: item.studentName,
          status: item.applicationStatus || "Pending",
          studentId: item.studentNumber || "Unknown",
        }));

        setRequests(updatedRequests);
        updateMetrics(updatedRequests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateMetrics = (requestsData) => {
    const total = requestsData.length;
    const assigned = requestsData.filter((r) => r.status === "Assigned").length;
    const pending = requestsData.filter((r) => r.status === "Pending").length;

    setMetrics({
      totalRequests: total,
      assignedRequests: assigned,
      pendingRequests: pending,
      laptopsAvailable: 50 - assigned,
      laptopsDistributed: assigned,
    });
  };

  const handleAssign = async (id) => {
    if (updatedRecords.has(id)) return;
  
    setUpdatingId(id);
  
    try {
      const request = requests.find((r) => r.id === id);
      const apiUrl = `http://localhost:5167/api/Computer/assign-computer/${request.studentId}`;
      await axios.put(apiUrl);
  
      const updatedRequests = requests.map((r) =>
        r.id === id ? { ...r, status: "Assigned" } : r
      );
  
      setRequests(updatedRequests);
      updateMetrics(updatedRequests);
      setUpdatedRecords((prev) => new Set(prev).add(id));
    } catch (error) {
      console.error("Error updating request status:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div style={{ backgroundColor: "#003366", color: "#ffffff", minHeight: "100vh", padding: "20px" }}>
      {/* <h1 style={{ textAlign: "center", color: "#FFD700" }}>Admin Dashboard</h1> */}

      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <div style={{ backgroundColor: "#D50032", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Total Requests</h3>
          <p>{metrics.totalRequests}</p>
        </div>
        <div style={{ backgroundColor: "#FFD700", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Assigned</h3>
          <p>{metrics.assignedRequests}</p>
        </div>
        
      </div>

      <h2 style={{ color: "#FFD700" }}>Application Management</h2>
      <table style={{ width: "100%", backgroundColor: "#ffffff", color: "#000", borderRadius: "8px", overflow: "hidden" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Application ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Student Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Student Number</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Application Status</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{request.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{request.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{request.studentId}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{request.status}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                <button
                  onClick={() => handleAssign(request.id)}
                  disabled={updatingId === request.id || updatedRecords.has(request.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#FFD700",
                    color: "#000",
                    border: "none",
                    borderRadius: "4px",
                    opacity: updatingId === request.id || updatedRecords.has(request.id) ? 0.5 : 1,
                    cursor: updatingId === request.id || updatedRecords.has(request.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {updatingId === request.id ? "Assigning..." : "Assign"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
