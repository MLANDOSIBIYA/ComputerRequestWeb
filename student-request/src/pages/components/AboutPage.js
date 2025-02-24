// import React from "react";

// const AboutPage = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//         About Our Computer Request System
//       </h1>
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "0 auto",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul style={{ fontSize: "16px", lineHeight: "1.8", listStyleType: "disc", paddingLeft: "20px" }}>
//           <li>
//             A streamlined process for students to request Computer.
//           </li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>
//             Secure and user-friendly interfaces for both students and administrators.
//           </li>
//           <li>
//             Analytics and insights for effective Computer inventory management.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul style={{ fontSize: "16px", lineHeight: "1.8", listStyleType: "disc", paddingLeft: "20px" }}>
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "./logo.jpg";


// const AboutPage = ({ loggedInUser, handleLogout, logo }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
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
//                 <span
//                   style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}
//                 >
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
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "20px auto 0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // Ensure the path to the logo image is correct
// import logo from "./logo.jpg"; // Adjust the path if necessary

// const AboutPage = ({ loggedInUser, handleLogout }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
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
//           {/* Logo */}
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
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "20px auto 0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // Ensure the path to the logo image is correct
// import logo from "./logo.jpg"; // Adjust the path if necessary

// const AboutPage = ({ loggedInUser, handleLogout }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
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
//           {/* Logo */}
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
//                 {/* <Link to="/AboutPage">
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
//                 </Link> */}
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
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "20px auto 0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpg";

// const AboutPage = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
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
//             <Link to="/">
//               <Button className="btn btn-danger me-2 fw-bold">Home</Button>
//             </Link>
//             <Link to="/login">
//               <Button className="btn btn-danger fw-bold">Login</Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "20px auto 0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpg";
// import Footer from "./Footer";

// const AboutPage = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
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
//             <Link to="/">
//               <Button className="btn btn-danger me-2 fw-bold">Home</Button>
//             </Link>
//             <Link to="/login">
//               <Button className="btn btn-danger fw-bold">Login</Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "20px auto 0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           flex: 1,
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>

//       {/* Add the Footer component here */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;


// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpg";
// import Footer from "./Footer";

// const AboutPage = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Navbar: Make it fill the width and top */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#000000",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: "100%", // Ensures it fills the width
//           position: "absolute", // Sticks it to the top of the page
//           top: 0,
//           left: 0,
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
//             <Link to="/">
//               <Button className="btn btn-danger me-2 fw-bold">Home</Button>
//             </Link>
//             <Link to="/login">
//               <Button className="btn btn-danger fw-bold">Login</Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Content section */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000",
//           padding: "20px",
//           borderRadius: "8px",
//           maxWidth: "900px",
//           margin: "80px auto 20px", // Top margin to prevent overlap with navbar
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           flex: 1,
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#eb0920", marginBottom: "30px" }}>
//           About Our Computer Request System
//         </h1>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
//           The Computer Request System is designed to bridge the technology gap for students
//           who lack access to essential devices. Our goal is to empower every student by
//           providing them with the necessary tools to excel academically and beyond.
//         </p>
//         <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>A streamlined process for students to request computers.</li>
//           <li>
//             Transparent updates on request statuses, ensuring students are always informed.
//           </li>
//           <li>Secure and user-friendly interfaces for both students and administrators.</li>
//           <li>Analytics and insights for effective computer inventory management.</li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Why Choose Us?
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//           This system is tailored to meet the needs of our university community, offering:
//         </p>
//         <ul
//           style={{
//             fontSize: "16px",
//             lineHeight: "1.8",
//             listStyleType: "disc",
//             paddingLeft: "20px",
//           }}
//         >
//           <li>Comprehensive support and feedback channels.</li>
//           <li>Robust security measures to protect sensitive data.</li>
//           <li>
//             Advanced features like role-based access, real-time notifications, and more.
//           </li>
//         </ul>
//         <h2 style={{ color: "#003366", textAlign: "center", marginTop: "20px" }}>
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "0" }}>
//           If you have any questions or need assistance, please don't hesitate to contact us
//           through our support channels. Together, we aim to create an inclusive and
//           technology-driven learning environment for all students.
//         </p>
//       </div>

//       {/* Footer: Make it fill the width and bottom */}
//       <Footer style={{ width: "100%", position: "relative", bottom: 0 }} />
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Footer from "./Footer";
import BgImage from './BgImage.jpg'; // Import background image

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${BgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar: Make it fill the width and top */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#000000",
          padding: "8px 15px", // Reduced padding
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%", // Ensures it fills the width
          position: "absolute", // Sticks it to the top of the page
          top: 0,
          left: 0,
        }}
      >
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "40px", marginRight: "10px" }} /> {/* Reduced logo size */}
          <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}> {/* Reduced font size */}
            Tshwane University of Technology
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff", marginLeft: "auto", backgroundColor: "white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Link to="/">
              <Button 
              style={{
                backgroundColor: '#D50032',
                border: 'none',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                marginRight: '10px',
                marginBottom: '15px',
                
              }}>
                Home
              </Button>
            </Link>
            <Link to="/login">
              <Button 
              style={{
                backgroundColor: '#D50032',
                border: 'none',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                marginRight: '10px',
                marginBottom: '15px',
                
              }}>
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content section */}
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#000",
          padding: "15px", // Reduced padding
          borderRadius: "8px",
          maxWidth: "800px", // Reduced width
          margin: "70px auto 20px", // Adjusted top margin
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          flex: 1,
          marginBottom:"50px",
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          marginTop: "100px",

        }}
      >
        <h1 style={{ textAlign: "center", color: "#eb0920", marginBottom: "20px" }}> {/* Reduced margin */}
          About Our Computer Request System
        </h1>
        <h2 style={{ color: "#003366", textAlign: "center" }}>Our Mission</h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}> {/* Reduced font size */}
          The Computer Request System is designed to bridge the technology gap for students
          who lack access to essential devices. Our goal is to empower every student by
          providing them with the necessary tools to excel academically and beyond.
        </p>
        <h2 style={{ color: "#003366", textAlign: "center" }}>What We Offer</h2>
        <ul
          style={{
            fontSize: "14px", // Reduced font size
            lineHeight: "1.6",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li>A streamlined process for students to request computers.</li>
          <li>Transparent updates on request statuses, ensuring students are always informed.</li>
          <li>Secure and user-friendly interfaces for both students and administrators.</li>
          <li>Analytics and insights for effective computer inventory management.</li>
        </ul>
        <h2 style={{ color: "#003366", textAlign: "center", marginTop: "15px" }}> {/* Reduced margin */}
          Why Choose Us?
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}> {/* Reduced font size */}
          This system is tailored to meet the needs of our university community, offering:
        </p>
        <ul
          style={{
            fontSize: "14px", // Reduced font size
            lineHeight: "1.6",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li>Comprehensive support and feedback channels.</li>
          <li>Robust security measures to protect sensitive data.</li>
          <li>Advanced features like role-based access, real-time notifications, and more.</li>
        </ul>
        <h2 style={{ color: "#003366", textAlign: "center", marginTop: "10px" }}> {/* Reduced margin */}
          Contact Us
        </h2>
        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "0" }}> {/* Reduced font size */}
          If you have any questions or need assistance, please don't hesitate to contact us
          through our support channels. Together, we aim to create an inclusive and
          technology-driven learning environment for all students.
        </p>
      </div>

      {/* Footer: Make it fill the width and bottom */}
      <Footer style={{ width: "100%", position: "relative", bottom: 0 }} />
    </div>
  );
};

export default AboutPage;
