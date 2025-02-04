// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import logo from "../assets/logo.jpg"; 
// import BackgroundVideo from "../video/background-video.mp4"; 

// const HomePage = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "50px", marginRight: "10px" }}
//           />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Button
//               href="/login"
//               style={{
//                 backgroundColor: "#D50032",
//                 border: "none",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//               }}
//             >
//               Login
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Content */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "8px",
//             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
//             Welcome to Tshwane University of Technology
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
//             Empowering students through technology and innovation. Explore our
//             programs, resources, and opportunities today.
//           </p>
//           <Button
//             href="/explore"
//             style={{
//               backgroundColor: "#D50032",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Explore Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
// import logo from '../assets/logo.jpg';
// import BackgroundVideo from '../video/background-video.mp4';
// import AboutPage from './components/AboutPage';


// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "50px", marginRight: "10px" }}
//           />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Button
//               href="/login"
//               style={{
//                 backgroundColor: "#D50032",
//                 border: "none",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//               }}
//             >
//               Login
//             </Button>
//           </Nav>
//           <Nav className="ms-auto">
//             <Button
//               href="/about"
//               style={{
//                 backgroundColor: "#D50032",
//                 border: "none",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//               }}
//             >
//               About
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Content */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "8px",
//             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
//             Welcome to Tshwane University of Technology
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
//             Tshwane University of Technology is a leading public university in South Africa,
//             dedicated to providing quality education and research opportunities in various fields.
//             We strive to empower students with the knowledge and skills they need to succeed in
//             a dynamic and ever-changing world.
//           </p>
//           <Button
//             variant="primary"
//             onClick={handleShowModal}
//             style={{
//               backgroundColor: "#D50032",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Learn More About Laptop Assistance
//           </Button>
//         </div>
//       </div>

//       {/* Modal for Laptop Assistance Information */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Laptop Assistance Program</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* ... (Modal body content as before) */}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import BackgroundVideo from "../video/background-video.mp4";

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "50px", marginRight: "10px" }}
//           />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Button
//               href="/login"
//               style={{
//                 backgroundColor: "#D50032",
//                 border: "none",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//               }}
//             >
//               Login
//             </Button>
//           </Nav>
//           <Nav className="ms-auto">
//             <Link to="/about">
//               <Button
//                 style={{
//                   backgroundColor: "#D50032",
//                   border: "none",
//                   color: "#fff",
//                   padding: "10px 20px",
//                   borderRadius: "4px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 About
//               </Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Content */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "8px",
//             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
//             Welcome to Tshwane University of Technology
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
//             Tshwane University of Technology is a leading public university in South Africa,
//             dedicated to providing quality education and research opportunities in various fields.
//             We strive to empower students with the knowledge and skills they need to succeed in
//             a dynamic and ever-changing world.
//           </p>
//           <Button
//             variant="primary"
//             onClick={handleShowModal}
//             style={{
//               backgroundColor: "#D50032",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Learn More About Laptop Assistance
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import BackgroundVideo from "../video/background-video.mp4";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   // Simulate fetching the logged-in user's name (you can replace this with actual logic)
//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }
//   }, []);

//   const handleLogout = () => {
//     // Clear user data and navigate to the home page
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "50px", marginRight: "10px" }}
//           />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button
//                     style={{
//                       backgroundColor: "#D50032",
//                       border: "none",
//                       color: "#fff",
//                       padding: "10px 20px",
//                       borderRadius: "4px",
//                       fontWeight: "bold",
//                       marginRight: "10px",
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/AboutPage">
//                   <Button
//                     style={{
//                       backgroundColor: "#D50032",
//                       border: "none",
//                       color: "#fff",
//                       padding: "10px 20px",
//                       borderRadius: "4px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     About
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//                   Welcome, {loggedInUser.name}
//                 </span>
//                 <Button
//                   onClick={handleLogout}
//                   style={{
//                     backgroundColor: "#D50032",
//                     border: "none",
//                     color: "#fff",
//                     padding: "10px 20px",
//                     borderRadius: "4px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Content */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "8px",
//             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
//             Welcome to Tshwane University of Technology
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
//             Tshwane University of Technology is a leading public university in South Africa,
//             dedicated to providing quality education and research opportunities in various fields.
//             We strive to empower students with the knowledge and skills they need to succeed in
//             a dynamic and ever-changing world.
//           </p>
//           <Button
//             variant="primary"
//             style={{
//               backgroundColor: "#D50032",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Learn More About Laptop Assistance
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import BackgroundVideo from "../video/background-video.mp4";
// import HelpSection from "./HelpSection";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   const handleNavigateToHelp = () => {
//     navigate("/help-section");
//   };

//   return (
//     <div>
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button
//                     style={{
//                       backgroundColor: "#D50032",
//                       border: "none",
//                       color: "#fff",
//                       padding: "10px 20px",
//                       borderRadius: "4px",
//                       fontWeight: "bold",
//                       marginRight: "10px",
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/AboutPage">
//                   <Button
//                     style={{
//                       backgroundColor: "#D50032",
//                       border: "none",
//                       color: "#fff",
//                       padding: "10px 20px",
//                       borderRadius: "4px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     About
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//                   Welcome, {loggedInUser.name}
//                 </span>
//                 <Button
//                   onClick={handleLogout}
//                   style={{
//                     backgroundColor: "#D50032",
//                     border: "none",
//                     color: "#fff",
//                     padding: "10px 20px",
//                     borderRadius: "4px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div
//         style={{
//           position: "relative",
//           height: "100vh",
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "8px",
//             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
//             Welcome to Tshwane University of Technology
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
//             Tshwane University of Technology is a leading public university in South Africa,
//             dedicated to providing quality education and research opportunities.
//           </p>
//           <Button
//             variant="primary"
//             style={{
//               backgroundColor: "#D50032",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "1rem",
//               marginBottom: "20px",
//             }}
//           >
//             Learn More About Laptop Assistance
//           </Button>
//           <Link to="/HelpSection">
//           <Button
//             variant="secondary"
//             onClick={handleNavigateToHelp}
//             style={{
//               backgroundColor: "#003366",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               fontSize: "2rem",
//               position: "absolute",
//               top: "50%",
//               right: "-30%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             Help Section
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import BackgroundVideo from "../video/background-video.mp4";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [showText, setShowText] = useState(true);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }

//     // Toggle text visibility every 3 seconds
//     const interval = setInterval(() => {
//       setShowText((prev) => !prev);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#003366",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button className="btn btn-danger me-2 fw-bold">Login</Button>
//                 </Link>
//                 <Link to="/AboutPage">
//                   <Button className="btn btn-danger fw-bold">About</Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span className="text-white fw-bold me-3">Welcome, {loggedInUser.name}</span>
//                 <Button onClick={handleLogout} className="btn btn-danger fw-bold">
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Background Video */}
//       <div className="position-relative vh-100 w-100 overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Animated Text + Help Button */}
//         <div
//           className="position-absolute top-50 start-50 translate-middle text-center p-4 rounded shadow-lg"
//           style={{
//             // backgroundColor: "rgba(0, 0, 0, 0.6)",
//             color: "#fff",
//             width: "80%",
//             transition: "opacity 1s ease-in-out",
//             opacity: showText ? 1 : 0, // Toggle opacity for animation
//           }}
//         >
//           <h1 className="fs-2 fw-bold">Welcome to Tshwane University of Technology Computer Assistance Program</h1>
//           <p className="fs-5">
          
//               At Tshwane University of Technology (TUT), we believe that every student deserves access to the necessary tools for academic success. 
//               If you do not have a personal computer and are not funded by NSFAS, this program is here to support you.
//               Through our Refurbished Computer Assistance Initiative,  we provide eligible students with refurbished computers to help them manage their schoolwork, 
//               attend online classes, and complete assignments—even from home.
             
//           </p>
//           <h1 className="fs-2 fw-bold">Who Can Apply?</h1>
//           <p className="fs-5">
            
//               ✅ TUT students without a personal computer
//               ✅ Students who are NOT funded by NSFAS
//               ✅ Those who need a computer to complete their academic work
//           </p>

//           {/* Help Section Button */}
//           <Link to="/HelpSection">
//             <Button className="btn btn-primary fw-bold mt-3 px-4 py-2">Help Section</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import BackgroundVideo from "../video/background-video.mp4";
// import Footer from "./components/Footer";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [showText, setShowText] = useState(true);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     } 

//     // Toggle text visibility every 30 seconds
//     const interval = setInterval(() => {
//       setShowText((prev) => !prev);
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#000000",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
//           <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: "center" }}>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button className="btn btn-danger me-2 fw-bold">Login</Button>
//                 </Link>
//                 <Link to="/AboutPage">
//                   <Button className="btn btn-danger fw-bold">About</Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span className="text-white fw-bold me-3">Welcome, {loggedInUser.name}</span>
//                 <Button onClick={handleLogout} className="btn btn-danger fw-bold">
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Background Video */}
//       <div className="position-relative vh-100 w-100 overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             zIndex: "-1",
//           }}
//         >
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Animated Text + Help Button */}
//         <div
//           className="position-absolute top-50 start-50 translate-middle text-center p-4 rounded"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             color: "#fff",
//             width: "80%",
//           }}
//         >
//           {/* H1 (Slide-in from Left) */}
//           <h1
//             className="fs-2 fw-bold"
//             style={{
//               transform: "translateX(-100%)",
//               animation: "slideIn 1.5s ease-out forwards",
//             }}
//           >
//             Welcome to Tshwane University of Technology Computer Assistance Program
//           </h1>

//           {/* Paragraph (30s fade in/out) */}
//           {showText && (
//             <>
//               <p
//                 className="fs-5"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeInOut 30s infinite",
//                 }}
//               >
//                 At Tshwane University of Technology (TUT), we believe that every student deserves access to the necessary tools for academic success. 
//                 If you do not have a personal computer and are not funded by NSFAS, this program is here to support you.
//                 Through our Refurbished Computer Assistance Initiative, we provide eligible students with refurbished computers to help them manage their schoolwork, 
//                 attend online classes, and complete assignments—even from home.
//               </p>

//               {/* Second H1 (Slide-in from Left) */}
//               <h1
//                 className="fs-2 fw-bold"
//                 style={{
//                   transform: "translateX(-100%)",
//                   animation: "slideIn 1.5s ease-out forwards",
//                 }}
//               >
//                 Who Can Apply?
//               </h1>

//               {/* Eligibility List (30s fade in/out) */}
//               <p
//                 className="fs-5"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeInOut 30s infinite",
//                 }}
//               >
//                 ✅ TUT students without a personal computer <br />
//                 ✅ Students who are NOT funded by NSFAS <br />
//                 ✅ Those who need a computer to complete their academic work
//               </p>
//             </>
//           )}

//           {/* Help Section Button */}
//           <Link to="/HelpSection">
//             <Button className="btn btn-primary fw-bold mt-3 px-4 py-2">Help Section</Button>
//           </Link>
//         </div>
//       </div>

//       {/* Inline Styles for Animations */}
//       <style>
//         {`
//           @keyframes slideIn {
//             from {
//               transform: translateX(-100%);
//               opacity: 0;
//             }
//             to {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }

//           @keyframes fadeInOut {
//             0% { opacity: 0; }
//             10% { opacity: 1; }
//             90% { opacity: 1; }
//             100% { opacity: 0; }
//           }
//         `}
//       </style>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import BackgroundVideo from "../video/background-video.mp4";
import Footer from "./components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }

    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#000000",
          padding: "10px 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
          <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
            Tshwane University of Technology
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            {!loggedInUser ? (
              <>
                <Link to="/login">
                  <Button className="btn btn-danger me-2 fw-bold">Login</Button>
                </Link>
                <Link to="/AboutPage">
                  <Button className="btn btn-danger fw-bold">About</Button>
                </Link>
              </>
            ) : (
              <>
                <span className="text-white fw-bold me-3">Welcome, {loggedInUser.name}</span>
                <Button onClick={handleLogout} className="btn btn-danger fw-bold">
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="position-relative flex-grow-1 w-100 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="position-absolute top-50 start-50 translate-middle text-center p-4 rounded"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            width: "80%",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <h1 className="fs-2 fw-bold">Welcome to Tshwane University of Technology Computer Assistance Program</h1>

          {showText && (
            <>
              <p className="fs-5">
                At Tshwane University of Technology (TUT), we believe that every student deserves access to the necessary tools for academic success. 
                If you do not have a personal computer and are not funded by NSFAS, this program is here to support you.
                Through our Refurbished Computer Assistance Initiative, we provide eligible students with refurbished computers to help them manage their schoolwork, 
                attend online classes, and complete assignments—even from home.
              </p>

              <h1 className="fs-2 fw-bold">Who Can Apply?</h1>

              <p className="fs-5">
                ✅ TUT students without a personal computer <br />
                ✅ Students who are NOT funded by NSFAS <br />
                ✅ Those who need a computer to complete their academic work
              </p>
            </>
          )}

          <Link to="/HelpSection">
            <Button className="btn btn-primary fw-bold mt-3 px-4 py-2">Help Section</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;


