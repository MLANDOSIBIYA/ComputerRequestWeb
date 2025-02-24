
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Make sure to import these
import { Link } from 'react-router-dom';
import BgImage from './components/BgImage.jpg'; // Import background image
import Footer from './components/Footer';
import logo from "../assets/logo.jpg";

const TermsOfUse = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar at the top of the page */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#000000',
          padding: '10px 20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} />
          <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Tshwane University of Technology
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff", marginLeft: "auto", backgroundColor: "white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
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
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/AboutPage">
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
                }}
              >
                About
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
                padding: '10px 20px',
                marginBottom: '15px',
              }}
              >
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main content */}
      <div
        style={{
          flex: 1, // Take up remaining space
          display: 'flex', // Enable Flexbox
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          flexDirection: 'column', // Stack content vertically
          backgroundImage: `url(${BgImage})`, // Apply the imported image as the background
          backgroundSize: 'cover', // Ensure the image covers the entire container
          backgroundPosition: 'center', // Center the background image
          backgroundAttachment: 'fixed', // Make the background image fixed while scrolling
          backgroundRepeat: 'no-repeat', // Prevent background image from repeating
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <h1 className="text-center text-white mb-2">Terms and Conditions for Computer Donation Program</h1>

          <div className="card mt-1  opacity-55" style={{ width: '80%', maxWidth: '700px', maxHeight: '72vh', overflowY: 'auto', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <div className="card-body">
              <h2 className="h4">1. Eligibility Requirements</h2>
              <ul>
                <li><strong>Financial Need:</strong> Only students who meet specific financial criteria may apply.</li>
                <li><strong>Enrollment Status:</strong> Only current, full-time students may apply.</li>
                <li><strong>Academic Requirement:</strong> Applicants must be actively pursuing their academic work.</li>
              </ul>

              <h2 className="h4">2. Application Process</h2>
              <ul>
                <li><strong>Documentation:</strong> Applicants must submit documents proving their financial situation.</li>
                <li><strong>Approval Process:</strong> Applications will be reviewed by a designated committee.</li>
                <li><strong>Limitations:</strong> Students may only apply once for a donated computer.</li>
              </ul>

              <h2 className="h4">3. Use of the Donated Computer</h2>
              <ul>
                <li><strong>Academic Purpose Only:</strong> The donated computer must be used for academic work only.</li>
                <li><strong>No Commercial Use:</strong> It cannot be used for personal business or non-academic purposes.</li>
                <li><strong>Software Installation:</strong> Only legal and licensed software may be installed.</li>
              </ul>

              <h2 className="h4">4. Maintenance and Responsibility</h2>
              <ul>
                <li><strong>Proper Care:</strong> The student is responsible for maintaining the computer.</li>
                <li><strong>Damage/Repair Costs:</strong> Students may be responsible for repair costs if damaged beyond normal use.</li>
                <li><strong>Return or Exchange:</strong> The computer must be returned if the student graduates or no longer needs it.</li>
              </ul>

              <h2 className="h4">5. Data Security</h2>
              <ul>
                <li><strong>Data Deletion:</strong> Students are responsible for deleting their personal data when done with the computer.</li>
                <li><strong>Security Measures:</strong> The university may provide security software, but students should ensure proper protection.</li>
              </ul>

              <h2 className="h4">6. Privacy and Data Protection</h2>
              <ul>
                <li><strong>Confidentiality:</strong> Personal information provided by the student will be kept confidential.</li>
                <li><strong>University Rights:</strong> The university may collect and analyze usage data to ensure proper use.</li>
              </ul>

              <h2 className="h4">7. Non-Transferability</h2>
              <ul>
                <li><strong>Ownership:</strong> The donated computer remains the property of the university and cannot be transferred.</li>
                <li><strong>Transferability:</strong> The computer must be returned if the student no longer needs it.</li>
              </ul>

              <h2 className="h4">8. Consequences for Misuse</h2>
              <ul>
                <li><strong>Breach of Terms:</strong> Misuse of the computer may result in the student losing access or facing academic consequences.</li>
              </ul>

              <h2 className="h4">9. Right to Modify or Terminate Program</h2>
              <ul>
                <li><strong>Program Changes:</strong> The university may modify or suspend the program at any time.</li>
                <li><strong>No Guarantee:</strong> Receiving a donated computer is not guaranteed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default TermsOfUse;
