// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const FeedbackLoopPage = () => {
//   const [surveyResponse, setSurveyResponse] = useState({
//     satisfaction: '',
//     productivity: '',
//     suggestions: '',
//   });
//   const [notification, setNotification] = useState('');

//   // Handle Student Survey Submission
//   const handleSurveySubmission = () => {
//     if (!surveyResponse.satisfaction || !surveyResponse.productivity) {
//       setNotification('Please complete the survey before submitting.');
//       return;
//     }
//     setNotification('Thank you for your feedback!');
//   };

//   // Handle Impact Tracking (optional, can be a simple tracking)
//   const handleImpactTracking = () => {
//     // Logic for tracking impact (could include productivity metrics or graphs)
//     setNotification('Impact tracking data recorded.');
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Feedback Loop</h2>

//       {/* Student Survey Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Student Survey</Card.Title>
//           <Form>
//             <Form.Group controlId="formSatisfaction">
//               <Form.Label>How satisfied are you with the laptop provided?</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={surveyResponse.satisfaction}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, satisfaction: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="Very Satisfied">Very Satisfied</option>
//                 <option value="Satisfied">Satisfied</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Dissatisfied">Dissatisfied</option>
//                 <option value="Very Dissatisfied">Very Dissatisfied</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formProductivity">
//               <Form.Label>Has the laptop helped improve your productivity?</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={surveyResponse.productivity}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, productivity: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="Significantly Improved">Significantly Improved</option>
//                 <option value="Somewhat Improved">Somewhat Improved</option>
//                 <option value="No Change">No Change</option>
//                 <option value="Somewhat Decreased">Somewhat Decreased</option>
//                 <option value="Significantly Decreased">Significantly Decreased</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formSuggestions">
//               <Form.Label>Any suggestions for improvement?</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={surveyResponse.suggestions}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, suggestions: e.target.value })}
//               />
//             </Form.Group>

//             <Button variant="primary" onClick={handleSurveySubmission}>
//               Submit Feedback
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Impact Tracking Section */}
//       <Card className="mt-4">
//         <Card.Body>
//           <Card.Title>Impact Tracking</Card.Title>
//           <Button variant="info" onClick={handleImpactTracking}>
//             Track Program Impact
//           </Button>
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

// export default FeedbackLoopPage;


// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const FeedbackLoopPage = () => {
//   const [surveyResponse, setSurveyResponse] = useState({
//     satisfaction: '',
//     productivity: '',
//     suggestions: '',
//   });
//   const [notification, setNotification] = useState('');

//   // Handle Student Survey Submission
//   const handleSurveySubmission = () => {
//     if (!surveyResponse.satisfaction || !surveyResponse.productivity) {
//       setNotification('Please complete the survey before submitting.');
//       return;
//     }
//     setNotification('Thank you for your feedback!');
//   };

//   // Handle Impact Tracking (optional, can be a simple tracking)
//   const handleImpactTracking = () => {
//     // Logic for tracking impact (could include productivity metrics or graphs)
//     setNotification('Impact tracking data recorded.');
//   };

//   return (
//     <div className="container mt-5 bg-light p-4 rounded">
//       <h2 className="text-center text-primary">Feedback Loop</h2>

//       {/* Student Survey Section */}
//       <Card className="mt-4">
//         <Card.Body className="bg-info text-white">
//           <Card.Title>Student Survey</Card.Title>
//           <Form>
//             <Form.Group controlId="formSatisfaction">
//               <Form.Label>How satisfied are you with the laptop provided?</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={surveyResponse.satisfaction}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, satisfaction: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="Very Satisfied">Very Satisfied</option>
//                 <option value="Satisfied">Satisfied</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Dissatisfied">Dissatisfied</option>
//                 <option value="Very Dissatisfied">Very Dissatisfied</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formProductivity">
//               <Form.Label>Has the laptop helped improve your productivity?</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={surveyResponse.productivity}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, productivity: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="Significantly Improved">Significantly Improved</option>
//                 <option value="Somewhat Improved">Somewhat Improved</option>
//                 <option value="No Change">No Change</option>
//                 <option value="Somewhat Decreased">Somewhat Decreased</option>
//                 <option value="Significantly Decreased">Significantly Decreased</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formSuggestions">
//               <Form.Label>Any suggestions for improvement?</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={surveyResponse.suggestions}
//                 onChange={(e) => setSurveyResponse({ ...surveyResponse, suggestions: e.target.value })}
//               />
//             </Form.Group>

//             <Button variant="primary" onClick={handleSurveySubmission}>
//               Submit Feedback
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Impact Tracking Section */}
//       <Card className="mt-4">
//         <Card.Body className="bg-warning text-dark">
//           <Card.Title>Impact Tracking</Card.Title>
//           <Button variant="danger" onClick={handleImpactTracking}>
//             Track Program Impact
//           </Button>
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

// export default FeedbackLoopPage;

// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const FeedbackLoopPage = () => {
//   const [surveyResponse, setSurveyResponse] = useState({
//     satisfaction: '',
//     productivity: '',
//     suggestions: '',
//   });
//   const [notification, setNotification] = useState('');

//   const handleSurveySubmission = () => {
//     if (!surveyResponse.satisfaction || !surveyResponse.productivity) {
//       setNotification('Please complete the survey before submitting.');
//       return;
//     }
//     setNotification('Thank you for your feedback!');
//   };

//   const handleImpactTracking = () => {
//     setNotification('Impact tracking data recorded.');
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background
//         color: '#fff',
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '600px' }}>
//         <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//           Feedback Loop
//         </h2>
//         {/* Student Survey Section */}
//         <Card style={{ marginBottom: '15px', borderColor: '#D50032' }}>
//           <Card.Body>
//             <Card.Title>Student Survey</Card.Title>
//             <Form>
//               <Form.Group controlId="formSatisfaction">
//                 <Form.Label>How satisfied are you with the laptop provided?</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={surveyResponse.satisfaction}
//                   onChange={(e) => setSurveyResponse({ ...surveyResponse, satisfaction: e.target.value })}
//                 >
//                   <option value="">Select</option>
//                   <option value="Very Satisfied">Very Satisfied</option>
//                   <option value="Satisfied">Satisfied</option>
//                   <option value="Neutral">Neutral</option>
//                   <option value="Dissatisfied">Dissatisfied</option>
//                   <option value="Very Dissatisfied">Very Dissatisfied</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group controlId="formProductivity">
//                 <Form.Label>Has the laptop helped improve your productivity?</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={surveyResponse.productivity}
//                   onChange={(e) => setSurveyResponse({ ...surveyResponse, productivity: e.target.value })}
//                 >
//                   <option value="">Select</option>
//                   <option value="Significantly Improved">Significantly Improved</option>
//                   <option value="Somewhat Improved">Somewhat Improved</option>
//                   <option value="No Change">No Change</option>
//                   <option value="Somewhat Decreased">Somewhat Decreased</option>
//                   <option value="Significantly Decreased">Significantly Decreased</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group controlId="formSuggestions">
//                 <Form.Label>Any suggestions for improvement?</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={surveyResponse.suggestions}
//                   onChange={(e) => setSurveyResponse({ ...surveyResponse, suggestions: e.target.value })}
//                 />
//               </Form.Group>

//               <Button
//                 style={{
//                   backgroundColor: '#D50032',
//                   borderColor: '#D50032',
//                   width: '100%',
//                 }}
//                 onClick={handleSurveySubmission}
//               >
//                 Submit Feedback
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>

//         {/* Impact Tracking Section */}
//         <Card style={{ borderColor: '#D50032' }}>
//           <Card.Body>
//             <Card.Title>Impact Tracking</Card.Title>
//             <Button
//               style={{
//                 backgroundColor: '#D50032',
//                 borderColor: '#D50032',
//                 width: '100%',
//               }}
//               onClick={handleImpactTracking}
//             >
//               Track Program Impact
//             </Button>
//           </Card.Body>
//         </Card>

//         {/* Notification Section */}
//         {notification && (
//           <Alert className="mt-4" variant="success">
//             {notification}
//           </Alert>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackLoopPage;

// import React, { useState } from 'react';
// import { Button, Form, Card, Alert } from 'react-bootstrap';

// const StudentSurveys = ({ setNotification }) => {
//   const [surveyResponse, setSurveyResponse] = useState({
//     satisfaction: '',
//     productivity: '',
//     suggestions: '',
//   });

//   const handleSurveySubmission = () => {
//     if (!surveyResponse.satisfaction || !surveyResponse.productivity) {
//       setNotification('Please complete the survey before submitting.');
//       return;
//     }
//     setNotification('Thank you for your feedback!');
//   };

//   return (
//     <Card style={{ marginBottom: '15px', borderColor: '#D50032' }}>
//       <Card.Body>
//         <Card.Title>Student Survey</Card.Title>
//         <Form>
//           <Form.Group controlId="formSatisfaction">
//             <Form.Label>How satisfied are you with the laptop provided?</Form.Label>
//             <Form.Control
//               as="select"
//               value={surveyResponse.satisfaction}
//               onChange={(e) => setSurveyResponse({ ...surveyResponse, satisfaction: e.target.value })}
//             >
//               <option value="">Select</option>
//               <option value="Very Satisfied">Very Satisfied</option>
//               <option value="Satisfied">Satisfied</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Dissatisfied">Dissatisfied</option>
//               <option value="Very Dissatisfied">Very Dissatisfied</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formProductivity">
//             <Form.Label>Has the laptop helped improve your productivity?</Form.Label>
//             <Form.Control
//               as="select"
//               value={surveyResponse.productivity}
//               onChange={(e) => setSurveyResponse({ ...surveyResponse, productivity: e.target.value })}
//             >
//               <option value="">Select</option>
//               <option value="Significantly Improved">Significantly Improved</option>
//               <option value="Somewhat Improved">Somewhat Improved</option>
//               <option value="No Change">No Change</option>
//               <option value="Somewhat Decreased">Somewhat Decreased</option>
//               <option value="Significantly Decreased">Significantly Decreased</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formSuggestions">
//             <Form.Label>Any suggestions for improvement?</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               value={surveyResponse.suggestions}
//               onChange={(e) => setSurveyResponse({ ...surveyResponse, suggestions: e.target.value })}
//             />
//           </Form.Group>

//           <Button
//             style={{
//               backgroundColor: '#D50032',
//               borderColor: '#D50032',
//               width: '100%',
//             }}
//             onClick={handleSurveySubmission}
//           >
//             Submit Feedback
//           </Button>
//         </Form>
//       </Card.Body>
//     </Card>
//   );
// };

// export default StudentSurveys;

import React, { useState } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';

const StudentSurveys = () => {
  const [surveyResponse, setSurveyResponse] = useState({
    satisfaction: '',
    productivity: '',
    suggestions: '',
  });
  const [notification, setNotification] = useState('');

  const handleSurveySubmission = () => {
    if (!surveyResponse.satisfaction || !surveyResponse.productivity) {
      setNotification('Please complete the survey before submitting.');
      return;
    }
    setNotification('Thank you for your feedback!');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#003366', 
        color: '#fff',
        marginTop: "-100px",
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
          
        </h2>
        <Card style={{ marginBottom: '15px', borderColor: '#D50032' }}>
          <Card.Body>
          <Card.Title className="text-center text-danger">Student Survey</Card.Title>

            <Form>
              <Form.Group controlId="formSatisfaction">
                <Form.Label>How satisfied are you with the computer provided?</Form.Label>
                <Form.Control
                  as="select"
                  value={surveyResponse.satisfaction}
                  onChange={(e) => setSurveyResponse({ ...surveyResponse, satisfaction: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Very Satisfied">Very Satisfied</option>
                  <option value="Satisfied">Satisfied</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Dissatisfied">Dissatisfied</option>
                  <option value="Very Dissatisfied">Very Dissatisfied</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formProductivity">
                <Form.Label>Has the computer helped improve your productivity?</Form.Label>
                <Form.Control
                  as="select"
                  value={surveyResponse.productivity}
                  onChange={(e) => setSurveyResponse({ ...surveyResponse, productivity: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Significantly Improved">Significantly Improved</option>
                  <option value="Somewhat Improved">Somewhat Improved</option>
                  <option value="No Change">No Change</option>
                  <option value="Somewhat Decreased">Somewhat Decreased</option>
                  <option value="Significantly Decreased">Significantly Decreased</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formSuggestions">
                <Form.Label>Any suggestions for improvement?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={surveyResponse.suggestions}
                  onChange={(e) => setSurveyResponse({ ...surveyResponse, suggestions: e.target.value })}
                />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: '#D50032',
                  borderColor: '#D50032',
                  width: '100%',
                }}
                onClick={handleSurveySubmission}
              >
                Submit Feedback
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

export default StudentSurveys;


