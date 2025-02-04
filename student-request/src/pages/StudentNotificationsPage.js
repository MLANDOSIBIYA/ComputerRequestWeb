import React, { useState, useEffect } from "react";

const StudentNotificationsPage = () => {
  const [studentNotifications, setStudentNotifications] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockStudentNotifications = [
      { id: 1, message: "Your request has been submitted successfully.", type: "confirmation" },
      { id: 2, message: "Your request has been approved.", type: "status" },
      { id: 3, message: "Laptop collection: 25th Jan, 10:00 AM, Room 101.", type: "collection" },
    ];

    setStudentNotifications(mockStudentNotifications);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          color: "#000",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
          Student Notifications
        </h1>

        {studentNotifications.length > 0 ? (
          <ul style={{ listStyle: "none", padding: "0" }}>
            {studentNotifications.map((notification) => (
              <li
                key={notification.id}
                style={{
                  backgroundColor: "#f4f4f4",
                  padding: "15px",
                  borderRadius: "8px",
                   marginBottom: "10px",
                  border: "1px solid #ccc",
                   fontSize: "14px",
                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                 }}
              >
                {notification.message}
               </li>
             ))}
          </ul>
        ) : (
          <p>No student notifications at the moment.</p>
        )}
       </div>
     </div>
   );
};

 export default StudentNotificationsPage;
