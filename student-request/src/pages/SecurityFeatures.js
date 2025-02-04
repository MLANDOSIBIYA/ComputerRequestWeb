// import React, { useState } from 'react';

// const SecurityFeatures = () => {
//   const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

//   const handleEnableTwoFactor = () => {
//     setIsTwoFactorEnabled(true);
//     alert('Two-Factor Authentication Enabled. Please check your email for the verification code.');
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: '#003366',
//         color: '#ffffff',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Security Features</h1>

//       {/* Data Encryption Section */}
//       <section style={{ marginBottom: '20px' }}>
//         <h2 style={{ color: '#FFD700' }}>Data Encryption</h2>
//         <p>
//           All sensitive data, such as student information and documents, is securely encrypted
//           using advanced encryption protocols. This ensures that unauthorized access is
//           prevented, and your data remains safe.
//         </p>
//       </section>

//       {/* Role-Based Access Section */}
//       <section style={{ marginBottom: '20px' }}>
//         <h2 style={{ color: '#FFD700' }}>Role-Based Access</h2>
//         <p>
//           The system provides role-based access control to ensure that users have appropriate
//           permissions based on their roles:
//         </p>
//         <ul>
//           <li>Students: Request laptops and track application status.</li>
//           <li>Admins: Manage inventory, approve/reject requests, and monitor system activity.</li>
//           <li>Support Staff: Assist users and address issues in the system.</li>
//         </ul>
//       </section>

//       {/* Two-Factor Authentication Section */}
//       <section style={{ marginBottom: '20px' }}>
//         <h2 style={{ color: '#FFD700' }}>Two-Factor Authentication</h2>
//         <p>
//           Add an extra layer of security to your login process by enabling Two-Factor
//           Authentication. Once enabled, you will need to verify your identity using a code sent
//           to your registered email or phone.
//         </p>
//         {isTwoFactorEnabled ? (
//           <p style={{ color: '#00FF00' }}>Two-Factor Authentication is currently enabled.</p>
//         ) : (
//           <button
//             onClick={handleEnableTwoFactor}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#D50032',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//             }}
//           >
//             Enable Two-Factor Authentication
//           </button>
//         )}
//       </section>

//       {/* Footer Section */}
//       <footer style={{ textAlign: 'center', marginTop: '20px', color: '#FFD700' }}>
//         <p>For more information on security, contact our support team at support@tut.ac.za</p>
//       </footer>
//     </div>
//   );
// };

// export default SecurityFeatures;


import React, { useState } from "react";

const SecurityFeatures = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const handleEnableTwoFactor = () => {
    setIsTwoFactorEnabled(true);
    alert("Two-Factor Authentication Enabled. Please check your email for the verification code.");
  };

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
          Security Features
        </h1>

        {/* Data Encryption Section */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Data Encryption</h2>
          <p style={{ lineHeight: "1.6" }}>
            All sensitive data, such as student information and documents, is securely encrypted
            using advanced encryption protocols. This ensures that unauthorized access is
            prevented, and your data remains safe.
          </p>
        </section>

        {/* Role-Based Access Section */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Role-Based Access</h2>
          <p style={{ lineHeight: "1.6" }}>
            The system provides role-based access control to ensure that users have appropriate
            permissions based on their roles:
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Students: Request laptops and track application status.</li>
            <li>Admins: Manage inventory, approve/reject requests, and monitor system activity.</li>
            <li>Support Staff: Assist users and address issues in the system.</li>
          </ul>
        </section>

        {/* Two-Factor Authentication Section */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Two-Factor Authentication</h2>
          <p style={{ lineHeight: "1.6" }}>
            Add an extra layer of security to your login process by enabling Two-Factor
            Authentication. Once enabled, you will need to verify your identity using a code sent
            to your registered email or phone.
          </p>
          {isTwoFactorEnabled ? (
            <p style={{ color: "#00FF00", fontWeight: "bold" }}>
              Two-Factor Authentication is currently enabled.
            </p>
          ) : (
            <button
              onClick={handleEnableTwoFactor}
              style={{
                padding: "10px 20px",
                backgroundColor: "#D50032",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Enable Two-Factor Authentication
            </button>
          )}
        </section>

        {/* Footer Section */}
        <footer
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#FFD700",
            fontSize: "14px",
            lineHeight: "1.4",
          }}
        >
          <p>
            For more information on security, contact our support team at{" "}
            <a
              href="mailto:support@tut.ac.za"
              style={{ color: "#FFD700", textDecoration: "underline" }}
            >
              support@tut.ac.za
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SecurityFeatures;
