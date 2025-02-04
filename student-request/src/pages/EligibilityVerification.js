// import React, { useState } from 'react';

// const EligibilityVerification = () => {
//   const [formData, setFormData] = useState({
//     studentId: '',
//     fullName: '',
//   });
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setVerificationStatus('Verifying...');

//     try {
//       // Simulating API integration with the university's student database
//       const mockDatabase = [
//         { studentId: '123456', fullName: 'John Doe' },
//         { studentId: '789012', fullName: 'Jane Smith' },
//         { studentId: '345678', fullName: 'Mark Taylor' },
//       ];

//       const student = mockDatabase.find(
//         (record) =>
//           record.studentId === formData.studentId.trim() &&
//           record.fullName.toLowerCase() === formData.fullName.trim().toLowerCase()
//       );

//       if (student) {
//         setVerificationStatus('Verification successful! Student is registered.');
//       } else {
//         setVerificationStatus('Verification failed! Student details not found.');
//       }
//     } catch (error) {
//       setVerificationStatus('An error occurred during verification. Please try again later.');
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           maxWidth: '500px',
//           backgroundColor: '#ffffff',
//           padding: '20px',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '20px' }}>
//           Eligibility Verification
//         </h2>
//         <form onSubmit={handleVerify}>
//           <div style={{ marginBottom: '15px' }}>
//             <label
//               htmlFor="studentId"
//               style={{ display: 'block', color: '#003366', fontWeight: 'bold', marginBottom: '5px' }}
//             >
//               Student Number
//             </label>
//             <input
//               type="text"
//               id="studentId"
//               name="studentId"
//               value={formData.studentId}
//               onChange={handleChange}
//               required
//               placeholder="Enter your student number"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label
//               htmlFor="fullName"
//               style={{ display: 'block', color: '#003366', fontWeight: 'bold', marginBottom: '5px' }}
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               width: '100%',
//               padding: '10px',
//               backgroundColor: '#003366',
//               color: '#ffffff',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Verify
//           </button>
//         </form>

//         {verificationStatus && (
//           <p
//             style={{
//               marginTop: '20px',
//               textAlign: 'center',
//               color: verificationStatus.includes('successful') ? 'green' : 'red',
//             }}
//           >
//             {verificationStatus}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EligibilityVerification;


import React, { useState } from "react";

const EligibilityVerification = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    fullName: "",
  });
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setVerificationStatus("Verifying...");

    try {
      // Simulating API integration with the university's student database
      const mockDatabase = [
        { studentId: "123456", fullName: "John Doe" },
        { studentId: "789012", fullName: "Jane Smith" },
        { studentId: "345678", fullName: "Mark Taylor" },
      ];

      const student = mockDatabase.find(
        (record) =>
          record.studentId === formData.studentId.trim() &&
          record.fullName.toLowerCase() === formData.fullName.trim().toLowerCase()
      );

      if (student) {
        setVerificationStatus("Verification successful! Student is registered.");
      } else {
        setVerificationStatus("Verification failed! Student details not found.");
      }
    } catch (error) {
      setVerificationStatus("An error occurred during verification. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#003366", // Blue background
        color: "#ffffff", // White text for contrast
        padding: "20px",
        // marginBottom:"50px",
        marginTop:"-150px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#f8f9fa", // Light gray background
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid #D50032", // Red border
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#D50032", // Red title
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Eligibility Verification
        </h2>
        <form onSubmit={handleVerify}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="studentId"
              style={{
                display: "block",
                color: "#003366", // Dark blue label
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Student Number
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              placeholder="Enter your student number"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="fullName"
              style={{
                display: "block",
                color: "#003366", // Dark blue label
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#D50032", // Red button
              color: "#ffffff", // White text
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Verify
          </button>
        </form>

        {verificationStatus && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: verificationStatus.includes("successful") ? "#28a745" : "#dc3545", // Green for success, red for error
              fontWeight: "bold",
            }}
          >
            {verificationStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default EligibilityVerification;
