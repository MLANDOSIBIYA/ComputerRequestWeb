// import React from 'react';
// import { Button, Card } from 'react-bootstrap';

// const ImpactTracking = ({ setNotification }) => {
//   const handleImpactTracking = () => {
//     setNotification('Impact tracking data recorded.');
//   };

//   return (
//     <Card style={{ borderColor: '#D50032' }}>
//       <Card.Body>
//         <Card.Title>Impact Tracking</Card.Title>
//         <Button
//           style={{
//             backgroundColor: '#D50032',
//             borderColor: '#D50032',
//             width: '100%',
//           }}
//           onClick={handleImpactTracking}
//         >
//           Track Program Impact
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ImpactTracking;


import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';

const ImpactTracking = () => {
  const [notification, setNotification] = useState('');

  const handleImpactTracking = () => {
    setNotification('Impact tracking data recorded.');
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
          Impact Tracking
        </h2>
        <Card style={{ borderColor: '#D50032' }}>
          <Card.Body>
            <Card.Title>Track Program Impact</Card.Title>
            <Button
              style={{
                backgroundColor: '#D50032',
                borderColor: '#D50032',
                width: '100%',
              }}
              onClick={handleImpactTracking}
            >
              Track Program Impact
            </Button>
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

export default ImpactTracking;
