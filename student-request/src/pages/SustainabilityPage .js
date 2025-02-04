// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const SustainabilityPage = () => {
//   const [donorName, setDonorName] = useState('');
//   const [laptopCondition, setLaptopCondition] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');
//   const [notification, setNotification] = useState('');

//   // Handle Recycling Program submission
//   const handleRecyclingProgram = () => {
//     if (!donorName || !laptopCondition) {
//       setNotification('Please fill in all fields for the Recycling Program.');
//       return;
//     }
//     setNotification(`Thank you ${donorName} for donating your laptop!`);
//   };

//   // Handle Donation System (Laptop/Fund)
//   const handleDonation = () => {
//     if (!donationAmount) {
//       setNotification('Please specify the donation amount.');
//       return;
//     }
//     setNotification(`Thank you for your generous donation of $${donationAmount}!`);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Sustainability Features</h2>

//       {/* Recycling Program Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Recycling Program</Card.Title>
//           <Form>
//             <Form.Group controlId="formDonorName">
//               <Form.Label>Your Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={donorName}
//                 onChange={(e) => setDonorName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formLaptopCondition">
//               <Form.Label>Laptop Condition</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter laptop condition (e.g., good, repairable)"
//                 value={laptopCondition}
//                 onChange={(e) => setLaptopCondition(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleRecyclingProgram}>
//               Donate Laptop
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Donation System Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Donation System</Card.Title>
//           <Form>
//             <Form.Group controlId="formDonationAmount">
//               <Form.Label>Donation Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter donation amount"
//                 value={donationAmount}
//                 onChange={(e) => setDonationAmount(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="success" onClick={handleDonation}>
//               Donate Funds
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Notification Section */}
//       {notification && (
//         <Alert className="mt-4" variant="success">
//           {notification}
//         </Alert>
//       )}
//     </div>
//   );
// };

// export default SustainabilityPage;


import React, { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";

const SustainabilityPage = () => {
  const [donorName, setDonorName] = useState("");
  const [laptopCondition, setLaptopCondition] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [notification, setNotification] = useState("");

  // Handle Recycling Program submission
  const handleRecyclingProgram = () => {
    if (!donorName || !laptopCondition) {
      setNotification("Please fill in all fields for the Recycling Program.");
      return;
    }
    setNotification(`Thank you ${donorName} for donating your laptop!`);
  };

  // Handle Donation System (Laptop/Fund)
  const handleDonation = () => {
    if (!donationAmount) {
      setNotification("Please specify the donation amount.");
      return;
    }
    setNotification(`Thank you for your generous donation of $${donationAmount}!`);
  };

  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "700px",
          backgroundColor: "#ffffff",
          color: "#000",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#D50032", marginBottom: "30px" }}>
          Sustainability Features
        </h2>

        {/* Recycling Program Section */}
        <Card className="mt-4" style={{ border: "none", marginBottom: "20px" }}>
          <Card.Body style={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <Card.Title style={{ color: "#003366", marginBottom: "15px" }}>Recycling Program</Card.Title>
            <Form>
              <Form.Group controlId="formDonorName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  style={{ marginBottom: "15px" }}
                />
              </Form.Group>

              <Form.Group controlId="formLaptopCondition">
                <Form.Label>Laptop Condition</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter laptop condition (e.g., good, repairable)"
                  value={laptopCondition}
                  onChange={(e) => setLaptopCondition(e.target.value)}
                  style={{ marginBottom: "15px" }}
                />
              </Form.Group>
              <Button
                onClick={handleRecyclingProgram}
                style={{
                  backgroundColor: "#003366",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                }}
              >
                Donate Laptop
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Donation System Section */}
        <Card className="mt-4" style={{ border: "none", marginBottom: "20px" }}>
          <Card.Body style={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <Card.Title style={{ color: "#003366", marginBottom: "15px" }}>Donation System</Card.Title>
            <Form>
              <Form.Group controlId="formDonationAmount">
                <Form.Label>Donation Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter donation amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  style={{ marginBottom: "15px" }}
                />
              </Form.Group>
              <Button
                onClick={handleDonation}
                style={{
                  backgroundColor: "#28a745",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                }}
              >
                Donate Funds
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Notification Section */}
        {notification && (
          <Alert
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              border: "1px solid #c3e6cb",
              marginTop: "20px",
              borderRadius: "8px",
            }}
          >
            {notification}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default SustainabilityPage;
