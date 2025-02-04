// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const ExternalSystemIntegrationPage = () => {
//   const [studentId, setStudentId] = useState('');
//   const [laptopSerial, setLaptopSerial] = useState('');
//   const [notification, setNotification] = useState('');

//   const handleStudentValidation = () => {
//     // Logic to validate student data via university system (API)
//     // If valid, show success message
//     setNotification('Student data validated successfully!');
//   };

//   const handleEmailNotification = () => {
//     // Logic to send email/SMS notifications (using Email/SMS API)
//     setNotification('Notification sent to student successfully!');
//   };

//   const handleTrackDevice = () => {
//     // Logic to track the laptop (via serial number or RFID)
//     setNotification('Laptop tracking details retrieved!');
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Integration with External Systems</h2>

//       {/* Student Validation Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Validate Student</Card.Title>
//           <Form>
//             <Form.Group controlId="formStudentId">
//               <Form.Label>Student ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Student ID"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleStudentValidation}>
//               Validate
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Email/SMS Notification Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Email/SMS Notification</Card.Title>
//           <Button variant="secondary" onClick={handleEmailNotification}>
//             Send Notification
//           </Button>
//         </Card.Body>
//       </Card>

//       {/* Device Tracking Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Track Laptop</Card.Title>
//           <Form>
//             <Form.Group controlId="formLaptopSerial">
//               <Form.Label>Laptop Serial Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Laptop Serial Number"
//                 value={laptopSerial}
//                 onChange={(e) => setLaptopSerial(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="danger" onClick={handleTrackDevice}>
//               Track Device
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

// export default ExternalSystemIntegrationPage;


import React, { useState } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';

const ExternalSystemIntegrationPage = () => {
  const [studentId, setStudentId] = useState('');
  const [laptopSerial, setComputerSerial] = useState('');
  const [notification, setNotification] = useState('');

  const handleStudentValidation = () => {
    setNotification('Student data validated successfully!');
  };

  const handleEmailNotification = () => {
    setNotification('Notification sent to student successfully!');
  };

  const handleTrackDevice = () => {
    setNotification('Computer tracking details retrieved!');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#003366', // Blue background
        color: '#fff',
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
          Integration with External Systems
        </h2>
        {/* Student Validation Section */}
        <Card style={{ marginBottom: '15px', borderColor: '#D50032' }}>
          <Card.Body>
            <Card.Title>Validate Student</Card.Title>
            <Form>
              <Form.Group controlId="formStudentId">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: '#D50032',
                  borderColor: '#D50032',
                  width: '100%',
                }}
                onClick={handleStudentValidation}
              >
                Validate
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Email/SMS Notification Section */}
        <Card style={{ marginBottom: '15px', borderColor: '#D50032' }}>
          <Card.Body>
            <Card.Title>Email/SMS Notification</Card.Title>
            <Button
              style={{
                backgroundColor: '#D50032',
                borderColor: '#D50032',
                width: '100%',
              }}
              onClick={handleEmailNotification}
            >
              Send Notification
            </Button>
          </Card.Body>
        </Card>

        {/* Device Tracking Section */}
        <Card style={{ borderColor: '#D50032' }}>
          <Card.Body>
            <Card.Title>Track computer</Card.Title>
            <Form>
              <Form.Group controlId="formComputerSerial">
                <Form.Label>computer Serial Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter computer Serial Number"
                  value={laptopSerial}
                  onChange={(e) => setComputerSerial(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: '#D50032',
                  borderColor: '#D50032',
                  width: '100%',
                }}
                onClick={handleTrackDevice}
              >
                Track Device
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Notification Section */}
        {notification && (
          <Alert className="mt-4" variant="success">
            {notification}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ExternalSystemIntegrationPage;
