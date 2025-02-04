// import React, { useState } from 'react';

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Form Request');

//   const sections = {
//     'Form Request': (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Laptop Request Form</h2>
//         <p style={{ color: '#ffffff' }}>Fill out the form to request a laptop.</p>
//         {/* Add form elements here */}
//       </div>
//     ),
//     'Status Track': (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Request Status</h2>
//         <p style={{ color: '#ffffff' }}>Track the status of your laptop request.</p>
//         {/* Add status tracking elements here */}
//       </div>
//     ),
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Student Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map((section) => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => setActiveSection(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Student Dashboard</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Student Dashboard</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;

// import React, { useState } from 'react';
// import LaptopRequestForm from './LaptopRequestForm'; // Import the LaptopRequestForm component
// import StatusPage from './StatusPage'; // Import the StatusPage component

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Form Request');

//   // Add the StatusPage component to the sections object
//   const sections = {
//     'Form Request': <LaptopRequestForm />, // Display the LaptopRequestForm when this section is active
//     'Status Track': <StatusPage status="Pending" />, // Pass the status prop to the StatusPage component
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Student Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map((section) => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => setActiveSection(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Student Dashboard</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Student Dashboard</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import { Navbar, Nav, Button } from 'react-bootstrap'; // Import necessary components
// import LaptopRequestForm from './LaptopRequestForm'; // Import the LaptopRequestForm component
// import StatusPage from './StatusPage'; // Import the StatusPage component

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Form Request');
//   const [loggedInUser, setLoggedInUser] = useState({ name: 'John Doe' }); // Mock logged-in user

//   // Add the StatusPage component to the sections object
//   const sections = {
//     'Form Request': <LaptopRequestForm />, // Display the LaptopRequestForm when this section is active
//     'Status Track': <StatusPage status="Pending" />, // Pass the status prop to the StatusPage component
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <Navbar expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="/" style={{ color: '#FFD700', fontWeight: 'bold' }}>TUT Student Panel</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             {/* Home Link */}
//             <Link to="/">
//               <Button
//                 style={{
//                   backgroundColor: "#D50032",
//                   border: "none",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   borderRadius: "4px",
//                   fontWeight: "bold",
//                   marginRight: "10px",
//                 }}
//               >
//                 Home
//               </Button>
//             </Link>

//             <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//               Welcome, {loggedInUser.name}
//             </span>
            
//             <Link to="/login">
//               <Button
//                 style={{
//                   backgroundColor: "#D50032",
//                   border: "none",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   borderRadius: "4px",
//                   fontWeight: "bold",
//                   marginRight: "10px",
//                 }}
//               >
//                 Logout
//               </Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div style={{ display: 'flex', flex: 1 }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: '250px',
//             backgroundColor: '#000',
//             padding: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           }}
//         >
//           <div>
//             <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Student Panel</h2>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '30px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{ color: '#FFD700', fontSize: '14px' }}>Student Dashboard</p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Student Dashboard</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import LaptopRequestForm from './LaptopRequestForm';
// import StatusPage from './StatusPage';
// import StudentSurveys from './StudentSurveys';

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Form Request');
//   const [loggedInUser, setLoggedInUser] = useState({ name: 'John Doe' });

//   const sections = {
//     'Form Request': <LaptopRequestForm />,
//     'Status Track': <StatusPage status="Pending" />,
//     'Student Survey': <StudentSurveys />, // Add the new "Student Survey" section
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <Navbar expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="/" style={{ color: '#FFD700', fontWeight: 'bold' }}>TUT Student Panel</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             <Link to="/">
//               <Button
//                 style={{
//                   backgroundColor: "#D50032",
//                   border: "none",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   borderRadius: "4px",
//                   fontWeight: "bold",
//                   marginRight: "10px",
//                 }}
//               >
//                 Home
//               </Button>
//             </Link>

//             <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//               Welcome, {loggedInUser.name}
//             </span>
            
//             <Link to="/login">
//               <Button
//                 style={{
//                   backgroundColor: "#D50032",
//                   border: "none",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   borderRadius: "4px",
//                   fontWeight: "bold",
//                   marginRight: "10px",
//                 }}
//               >
//                 Logout
//               </Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div style={{ display: 'flex', flex: 1 }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: '250px',
//             backgroundColor: '#000',
//             padding: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           }}
//         >
//           <div>
//             <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Student Panel</h2>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '30px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{ color: '#FFD700', fontSize: '14px' }}>Student Dashboard</p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Student Dashboard</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import LaptopRequestForm from './LaptopRequestForm';
// import StatusPage from './StatusPage';
// import StudentSurveys from './StudentSurveys';
// import { BsThreeDots } from 'react-icons/bs'; // Import three dots icon
// import logo from './logo.jpg'; // Import logo

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Form Request');
//   const [loggedInUser, setLoggedInUser] = useState({ name: 'John Doe' });
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar state

//   const sections = {
//     'Form Request': <LaptopRequestForm />,
//     'Status Track': <StatusPage status="Pending" />,
//     'Student Survey': <StudentSurveys />, // Add the new "Student Survey" section
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <Navbar expand="lg" style={{ backgroundColor: '#003366', padding: '10px 20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} />
//           <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#fff' }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: 'center' }}>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button
//                     style={{
//                       backgroundColor: '#D50032',
//                       border: 'none',
//                       color: '#fff',
//                       padding: '10px 20px',
//                       borderRadius: '4px',
//                       fontWeight: 'bold',
//                       marginRight: '10px',
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/AboutPage">
//                   <Button
//                     style={{
//                       backgroundColor: '#D50032',
//                       border: 'none',
//                       color: '#fff',
//                       padding: '10px 20px',
//                       borderRadius: '4px',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     About
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span style={{ color: '#fff', marginRight: '15px', fontWeight: 'bold' }}>
//                   Welcome, {loggedInUser.name}
//                 </span>
//                 <Button
//                   onClick={() => {
//                     localStorage.removeItem('loggedInUser');
//                     setLoggedInUser(null);
//                   }}
//                   style={{
//                     backgroundColor: '#D50032',
//                     border: 'none',
//                     color: '#fff',
//                     padding: '10px 20px',
//                     borderRadius: '4px',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div style={{ display: 'flex', flex: 1 }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: sidebarOpen ? '250px' : '50px',
//             backgroundColor: '#000',
//             padding: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             transition: 'width 0.3s ease-in-out',
//           }}
//         >
//           <div>
//             <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Student Panel</h2>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '30px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{ color: '#FFD700', fontSize: '14px' }}>Student Dashboard</p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           {/* Toggle Button (Three Dots) */}
//           <BsThreeDots
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             style={{ color: '#FFD700', cursor: 'pointer', fontSize: '30px', position: 'absolute', top: '15px', left: '270px' }}
//           />

//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Student Dashboard</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import LaptopRequestForm from './LaptopRequestForm';
// import StatusPage from './StatusPage';
// import StudentSurveys from './StudentSurveys';
// import { BsThreeDots } from 'react-icons/bs';
// import logo from './logo.jpg'; 
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

// const StudentLandingPage = () => {
//   const [activeSection, setActiveSection] = useState("Form Request");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }
//   }, []);

//   const sections = {
//     'Form Request': { component: <LaptopRequestForm />, icon: "bi bi-file-earmark-plus" },
//     'Status Track': { component: <StatusPage status="Pending" />, icon: "bi bi-calendar-check" },
//     'Student Survey': { component: <StudentSurveys />, icon: "bi bi-bar-chart" },
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('loggedInUser');
//     setLoggedInUser(null);
//     navigate('/');
//   };

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#003366" }}>
//       {/* Navbar */}
//       <div
//         style={{
//           backgroundColor: "#000408",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </div>

//         <div style={{ display: "flex", alignItems: "center" }}>
//           {loggedInUser && (
//             <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//               Welcome, {loggedInUser.name}
//             </span>
//           )}
//           <button
//             onClick={handleLogout}
//             style={{
//               backgroundColor: "#D50032",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Sidebar & Main Content */}
//       <div style={{ display: "flex", marginTop: "10px" }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: sidebarOpen ? "250px" : "50px",
//             backgroundColor: "#000",
//             padding: "20px",
//             minHeight: "100vh",
//             transition: "width 0.3s ease-in-out",
//             position: "relative",
//           }}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             {sidebarOpen && <h2 style={{ color: "#FFD700" }}></h2>}
//             <BsThreeDots
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               style={{ color: "#FFD700", cursor: "pointer", fontSize: "50px" }}
//             />
//           </div>

//           {sidebarOpen && (
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: "15px" }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: activeSection === section ? "#FFD700" : "#D50032",
//                       color: activeSection === section ? "#000" : "#fff",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "flex-start",
//                       gap: "10px",
//                     }}
//                   >
//                     <i className={sections[section].icon} style={{ fontSize: "18px" }}></i>
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: "20px" }}>
//           <h1 style={{ textAlign: "center", color: "#FFD700" }}>Welcome, Student!</h1>
//           {sections[activeSection].component}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLandingPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LaptopRequestForm from './LaptopRequestForm';
import StatusPage from './StatusPage';
import StudentSurveys from './StudentSurveys';
import { BsThreeDots } from 'react-icons/bs';
import logo from './logo.jpg'; 
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const StudentLandingPage = () => {
  const [activeSection, setActiveSection] = useState("Form Request");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const sections = {
    'Form Request': { component: <LaptopRequestForm />, icon: "bi bi-file-earmark-plus" },
    'Status Track': { component: <StatusPage status="Pending" />, icon: "bi bi-calendar-check" },
    'Student Survey': { component: <StudentSurveys />, icon: "bi bi-bar-chart" },
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    navigate('/');
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#003366", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#000408",
          padding: "10px 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
          <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
            Tshwane University of Technology
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {loggedInUser && (
            <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
              Welcome, {loggedInUser.name}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#D50032",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "60px", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div
          style={{
            width: sidebarOpen ? "250px" : "50px",
            backgroundColor: "#000",
            padding: "20px",
            minHeight: "100vh",
            transition: "width 0.3s ease-in-out",
            position: "fixed",
            left: 0,
            top: "60px",
            bottom: 0,
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <BsThreeDots
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: "#FFD700", cursor: "pointer", fontSize: "50px" }}
            />
          </div>
          {sidebarOpen && (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {Object.keys(sections).map((section) => (
                <li key={section} style={{ marginBottom: "15px" }}>
                  <button
                    onClick={() => setActiveSection(section)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: activeSection === section ? "#FFD700" : "#D50032",
                      color: activeSection === section ? "#000" : "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <i className={sections[section].icon} style={{ fontSize: "18px" }}></i>
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px", marginLeft: sidebarOpen ? "250px" : "50px", overflowY: "auto", maxHeight: "calc(100vh - 60px)" }}>
          <h1 style={{ textAlign: "center", color: "#FFD700" }}>Welcome, Student!</h1>
          {sections[activeSection].component}
        </div>
      </div>

      <footer style={{ backgroundColor: "#000408", color: "#fff", textAlign: "center", padding: "20px", position: "fixed", bottom: 0, width: "100%", marginTop:"-50px" }}>
        &copy; {new Date().getFullYear()} Tshwane University of Technology. All Rights Reserved.
      </footer>
    </div>
  );
};

export default StudentLandingPage;







