// import React from "react";

// const HelpSection = () => {
//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//       <h1 style={{ color: "#003366", marginBottom: "20px" }}>Help Section</h1>
//       <ul style={{ lineHeight: "1.8" }}>
//         <li>How do I request a laptop? - Go to the "Laptop Request" page and fill out the form.</li>
//         <li>
//           What happens after I submit my request? - Your request will be reviewed, and you'll receive
//           notifications about its status.
//         </li>
//         <li>
//           Who can I contact for more help? - Email us at{" "}
//           <a href="mailto:myTUTor@tut.ac.za" style={{ color: "#D50032" }}>
//             myTUTor@tut.ac.za
//           </a>{" "}
//           or call (012) 382 4427.
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default HelpSection;


// import React from "react";

// const HelpSection = () => {
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
//         <h1 style={{ textAlign: "center", color: "#D50032", marginBottom: "30px" }}>
//           Help Section
//         </h1>
//         <ul
//           style={{
//             backgroundColor: "#f9f9f9",
//             padding: "15px",
//             borderRadius: "8px",
//             lineHeight: "1.6",
//           }}
//         >
//           <li>How do I request a computer? - Go to the "computer Request" page and fill out the form.</li>
//           <li>
//             What happens after I submit my request? - Your request will be reviewed, and you'll
//             receive notifications about its status.
//           </li>
//           <li>
//             Who can I contact for more help? - Email us at{" "}
//             <a
//               href="mailto:myTUTor@tut.ac.za"
//               style={{ color: "#D50032", textDecoration: "underline" }}
//             >
//               myTUTor@tut.ac.za
//             </a>{" "}
//             or call (012) 382 4427.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HelpSection;


// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "./logo.jpg"; // Ensure the path is correct

// const HelpSection = ({ loggedInUser, handleLogout }) => {
//   return (
//     <div style={{ backgroundColor: "#003366", color: "#ffffff", minHeight: "100vh" }}>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{ backgroundColor: "#000000", padding: "10px 20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
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
//               <Button style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold", marginRight: "10px" }}>
//                 Home
//               </Button>
//             </Link>
//             {!loggedInUser ? (
//               <>
//                 <Link to="/login">
//                   <Button style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold", marginRight: "10px" }}>
//                     Login
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//                   Welcome, {loggedInUser.name}
//                 </span>
//                 <Button onClick={handleLogout} style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold" }}>
//                   Logout
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Help Section Content */}
//       <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <div style={{ width: "90%", maxWidth: "600px", backgroundColor: "#ffffff", color: "#000", borderRadius: "8px", padding: "20px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}>
//           <h1 style={{ textAlign: "center", color: "#D50032", marginBottom: "30px" }}>Help Section</h1>
//           <ul style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px", lineHeight: "1.6" }}>
//             <li>How do I request a computer? - Go to the "Computer Request" page and fill out the form.</li>
//             <li>What happens after I submit my request? - Your request will be reviewed, and you'll receive notifications about its status.</li>
//             <li>Who can I contact for more help? - Email us at <a href="mailto:myTUTor@tut.ac.za" style={{ color: "#D50032", textDecoration: "underline" }}>myTUTor@tut.ac.za</a> or call (012) 382 4427.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HelpSection;


import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.jpg"; // Ensure the path is correct

const HelpSection = ({ loggedInUser, handleLogout }) => {
  return (
    <div style={{ backgroundColor: "#003366", color: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#000000", padding: "10px 20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
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
            <Link to="/">
              <Button style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold", marginRight: "10px" }}>
                Home
              </Button>
            </Link>
            {!loggedInUser ? (
              <>
                <Link to="/login">
                  <Button style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold", marginRight: "10px" }}>
                    Login
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
                  Welcome, {loggedInUser.name}
                </span>
                <Button onClick={handleLogout} style={{ backgroundColor: "#D50032", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontWeight: "bold" }}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Help Section Content */}
      <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
        <div style={{ width: "90%", maxWidth: "600px", backgroundColor: "#ffffff", color: "#000", borderRadius: "8px", padding: "20px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}>
          <h1 style={{ textAlign: "center", color: "#D50032", marginBottom: "30px" }}>Help Section</h1>
          <ul style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px", lineHeight: "1.6" }}>
            <li>How do I request a computer? - Go to the "Computer Request" page and fill out the form.</li>
            <li>What happens after I submit my request? - Your request will be reviewed, and you'll receive notifications about its status.</li>
            <li>Who can I contact for more help? - Email us at <a href="mailto:myTUTor@tut.ac.za" style={{ color: "#D50032", textDecoration: "underline" }}>myTUTor@tut.ac.za</a> or call (012) 382 4427.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#000000", color: "#fff", padding: "25px 20px", textAlign: "center", marginTop: "auto" }}>
        <p style={{ margin: "0", fontSize: "14px" }}>
          © 2025 Tshwane University of Technology. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default HelpSection;
