// import React, { useState, useEffect } from 'react';

// const NotificationsPage = () => {
//   const [studentNotifications, setStudentNotifications] = useState([]);
//   const [adminAlerts, setAdminAlerts] = useState([]);

//   useEffect(() => {
//     // Mock data for demonstration purposes
//     const mockStudentNotifications = [
//       { id: 1, message: 'Your request has been submitted successfully.', type: 'confirmation' },
//       { id: 2, message: 'Your request has been approved.', type: 'status' },
//       { id: 3, message: 'Laptop collection: 25th Jan, 10:00 AM, Room 101.', type: 'collection' },
//     ];

//     const mockAdminAlerts = [
//       { id: 1, message: 'Low inventory: Only 5 laptops remaining.', type: 'inventory' },
//       { id: 2, message: 'New request received from Student ID: 123456.', type: 'request' },
//     ];

//     setStudentNotifications(mockStudentNotifications);
//     setAdminAlerts(mockAdminAlerts);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: '#003366',
//         color: '#ffffff',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Notifications & Alerts</h1>

//       {/* Student Notifications Section */}
//       <div style={{ marginTop: '20px' }}>
//         <h2 style={{ color: '#FFD700' }}>Student Notifications</h2>
//         <ul style={{ listStyle: 'none', padding: '0' }}>
//           {studentNotifications.map((notification) => (
//             <li
//               key={notification.id}
//               style={{
//                 backgroundColor: '#ffffff',
//                 color: '#000',
//                 padding: '10px',
//                 borderRadius: '8px',
//                 marginBottom: '10px',
//                 border: '1px solid #ccc',
//               }}
//             >
//               {notification.message}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Admin Alerts Section */}
//       <div style={{ marginTop: '20px' }}>
//         <h2 style={{ color: '#FFD700' }}>Admin Alerts</h2>
//         <ul style={{ listStyle: 'none', padding: '0' }}>
//           {adminAlerts.map((alert) => (
//             <li
//               key={alert.id}
//               style={{
//                 backgroundColor: alert.type === 'inventory' ? '#D50032' : '#FFD700',
//                 color: alert.type === 'inventory' ? '#ffffff' : '#000',
//                 padding: '10px',
//                 borderRadius: '8px',
//                 marginBottom: '10px',
//                 border: '1px solid #ccc',
//               }}
//             >
//               {alert.message}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


// import React, { useState, useEffect } from "react";

// const NotificationsPage = () => {
//   const [studentNotifications, setStudentNotifications] = useState([]);
//   const [adminAlerts, setAdminAlerts] = useState([]);

//   useEffect(() => {
//     // Mock data for demonstration purposes
//     const mockStudentNotifications = [
//       { id: 1, message: "Your request has been submitted successfully.", type: "confirmation" },
//       { id: 2, message: "Your request has been approved.", type: "status" },
//       { id: 3, message: "Laptop collection: 25th Jan, 10:00 AM, Room 101.", type: "collection" },
//     ];

//     const mockAdminAlerts = [
//       { id: 1, message: "Low inventory: Only 5 laptops remaining.", type: "inventory" },
//       { id: 2, message: "New request received from Student ID: 123456.", type: "request" },
//     ];

//     setStudentNotifications(mockStudentNotifications);
//     setAdminAlerts(mockAdminAlerts);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           maxWidth: "600px",
//           backgroundColor: "#ffffff",
//           color: "#000",
//           borderRadius: "8px",
//           padding: "20px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           Notifications & Alerts
//         </h1>

//         {/* Student Notifications Section */}
//         <div style={{ marginBottom: "30px" }}>
//           <h2 style={{ color: "#003366", marginBottom: "15px" }}>Student Notifications</h2>
//           <ul style={{ listStyle: "none", padding: "0" }}>
//             {studentNotifications.map((notification) => (
//               <li
//                 key={notification.id}
//                 style={{
//                   backgroundColor: "#f4f4f4",
//                   padding: "15px",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                   border: "1px solid #ccc",
//                   fontSize: "14px",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 {notification.message}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Admin Alerts Section */}
//         <div>
//           <h2 style={{ color: "#003366", marginBottom: "15px" }}>Admin Alerts</h2>
//           <ul style={{ listStyle: "none", padding: "0" }}>
//             {adminAlerts.map((alert) => (
//               <li
//                 key={alert.id}
//                 style={{
//                   backgroundColor: alert.type === "inventory" ? "#D50032" : "#FFD700",
//                   color: alert.type === "inventory" ? "#ffffff" : "#000",
//                   padding: "15px",
//                   borderRadius: "8px",
//                   marginBottom: "10px",
//                   border: "1px solid #ccc",
//                   fontSize: "14px",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 {alert.message}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


// import React, { useState, useEffect } from "react";

// const NotificationsPage = () => {
//   const [studentNotifications, setStudentNotifications] = useState([]);
//   const [adminAlerts, setAdminAlerts] = useState([]);

//   useEffect(() => {
//     // Mock data for demonstration purposes
//     const mockStudentNotifications = [
//       { id: 1, message: "Your request has been submitted successfully.", type: "confirmation" },
//       { id: 2, message: "Your request has been approved.", type: "status" },
//       { id: 3, message: "Laptop collection: 25th Jan, 10:00 AM, Room 101.", type: "collection" },
//     ];

//     const mockAdminAlerts = [
//       { id: 1, message: "Low inventory: Only 5 laptops remaining.", type: "inventory" },
//       { id: 2, message: "New request received from Student ID: 123456.", type: "request" },
//     ];

//     setStudentNotifications(mockStudentNotifications);
//     setAdminAlerts(mockAdminAlerts);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           maxWidth: "600px",
//           backgroundColor: "#ffffff",
//           color: "#000",
//           borderRadius: "8px",
//           padding: "20px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           Notifications & Alerts
//         </h1>

//         {/* Student Notifications Section */}
//         <div style={{ marginBottom: "30px" }}>
//           <h2 style={{ color: "#003366", marginBottom: "15px" }}>Student Notifications</h2>
//           {studentNotifications.length > 0 ? (
//             <ul style={{ listStyle: "none", padding: "0" }}>
//               {studentNotifications.map((notification) => (
//                 <li
//                   key={notification.id}
//                   style={{
//                     backgroundColor: "#f4f4f4",
//                     padding: "15px",
//                     borderRadius: "8px",
//                     marginBottom: "10px",
//                     border: "1px solid #ccc",
//                     fontSize: "14px",
//                     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   {notification.message}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No student notifications at the moment.</p>
//           )}
//         </div>

//         {/* Admin Alerts Section */}
//         <div>
//           <h2 style={{ color: "#003366", marginBottom: "15px" }}>Admin Alerts</h2>
//           {adminAlerts.length > 0 ? (
//             <ul style={{ listStyle: "none", padding: "0" }}>
//               {adminAlerts.map((alert) => (
//                 <li
//                   key={alert.id}
//                   style={{
//                     backgroundColor: alert.type === "inventory" ? "#D50032" : "#FFD700",
//                     color: alert.type === "inventory" ? "#ffffff" : "#000",
//                     padding: "15px",
//                     borderRadius: "8px",
//                     marginBottom: "10px",
//                     border: "1px solid #ccc",
//                     fontSize: "14px",
//                     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   {alert.message}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No admin alerts at the moment.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;




import React, { useState, useEffect } from "react";

const AdminAlertsPage = () => {
  const [adminAlerts, setAdminAlerts] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockAdminAlerts = [
      { id: 1, message: "Low inventory: Only 5 laptops remaining.", type: "inventory" },
      { id: 2, message: "New request received from Student ID: 123456.", type: "request" },
    ];

    setAdminAlerts(mockAdminAlerts);
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
        marginTop: "-150px",
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
          Admin Alerts
        </h1>

        {adminAlerts.length > 0 ? (
          <ul style={{ listStyle: "none", padding: "0" }}>
            {adminAlerts.map((alert) => (
              <li
                key={alert.id}
                style={{
                  backgroundColor: alert.type === "inventory" ? "#D50032" : "#FFD700",
                  color: alert.type === "inventory" ? "#ffffff" : "#000",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {alert.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No admin alerts at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AdminAlertsPage;
