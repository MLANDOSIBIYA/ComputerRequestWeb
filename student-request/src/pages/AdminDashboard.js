import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [metrics, setMetrics] = useState({
    totalRequests: 0,
    approvedRequests: 0,
    pendingRequests: 0,
    rejectedRequests: 0,
    laptopsAvailable: 50,
    laptopsDistributed: 0,
  });

  const [updatingId, setUpdatingId] = useState(null); // Tracks the request being updated
  const [updatedRecords, setUpdatedRecords] = useState(new Set()); // Tracks updated requests

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:5167/api/Application/get-pending-applications";
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
    const approved = requestsData.filter((r) => r.status === "Approved").length;
    const pending = requestsData.filter((r) => r.status === "Pending").length;
    const rejected = requestsData.filter((r) => r.status === "Rejected").length;

    setMetrics({
      totalRequests: total,
      approvedRequests: approved,
      pendingRequests: pending,
      rejectedRequests: rejected,
      laptopsAvailable: 50 - approved,
      laptopsDistributed: approved,
    });
  };

  const handleAction = async (id, action) => {
    if (updatedRecords.has(id)) return; // Prevent double updates

    setUpdatingId(id); // Show loading state

    try {
      const apiUrl = `http://localhost:5167/api/Application/Update-ApplicationStatus/${id}?applicationStatus=${action}`;
      await axios.put(apiUrl, { status: action });

      const updatedRequests = requests.map((request) =>
        request.id === id ? { ...request, status: action } : request
      );

      setRequests(updatedRequests);
      updateMetrics(updatedRequests);

      // Mark the request as updated to keep buttons disabled
      setUpdatedRecords((prev) => new Set(prev).add(id));
    } catch (error) {
      console.error("Error updating request status:", error);
    } finally {
      setUpdatingId(null); // Reset loading state
    }
  };

  return (
    <div style={{ backgroundColor: "#003366", color: "#ffffff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#FFD700" }}>Admin Dashboard</h1>

      {/* Metrics Section */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <div style={{ backgroundColor: "#D50032", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Total Requests</h3>
          <p>{metrics.totalRequests}</p>
        </div>
        <div style={{ backgroundColor: "#FFD700", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Approved</h3>
          <p>{metrics.approvedRequests}</p>
        </div>
        <div style={{ backgroundColor: "#D50032", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Pending</h3>
          <p>{metrics.pendingRequests}</p>
        </div>
        <div style={{ backgroundColor: "#000", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
          <h3>Rejected</h3>
          <p>{metrics.rejectedRequests}</p>
        </div>
      </div>

      {/* Request Management Section */}
      <h2 style={{ color: "#FFD700" }}>Request Management</h2>
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
                  onClick={() => handleAction(request.id, "Approved")}
                  disabled={updatingId === request.id || updatedRecords.has(request.id)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#FFD700",
                    color: "#000",
                    border: "none",
                    borderRadius: "4px",
                    opacity: updatingId === request.id || updatedRecords.has(request.id) ? 0.5 : 1,
                    cursor: updatingId === request.id || updatedRecords.has(request.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {updatingId === request.id ? "Updating..." : "Approve"}
                </button>
                <button
                  onClick={() => handleAction(request.id, "Rejected")}
                  disabled={updatingId === request.id || updatedRecords.has(request.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#D50032",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    opacity: updatingId === request.id || updatedRecords.has(request.id) ? 0.5 : 1,
                    cursor: updatingId === request.id || updatedRecords.has(request.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {updatingId === request.id ? "Updating..." : "Reject"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notifications Section */}
      <h2 style={{ marginTop: "20px", color: "#FFD700" }}>Notifications</h2>
      <p style={{ textAlign: "center", color: "#ffffff" }}>
        Approval and rejection notifications will be sent to students via email or SMS.
      </p>
    </div>
  );
};

export default AdminDashboard;
