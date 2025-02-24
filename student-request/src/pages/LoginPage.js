// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: 'student@gmail.com',
//     password: 'password123'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle login form submission here (e.g., send data to API)
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background color
//         color: '#fff', // White text color for better contrast
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '400px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#f8f9fa', // Light gray background for the form
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '2px solid #D50032', // Red border color
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//             Student Login
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email address"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="password" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032', // Red button color
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Login
//           </button>

//           <p style={{ textAlign: 'center', marginTop: '15px' }}>
//             <small style={{ color: '#003366' }}>
//               Don't have an account?{' '}
//               <a href="/register" style={{ color: '#D50032' }}>
//                 Register
//               </a>
//             </small>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const LoginPage = () => {
//   const navigate = useNavigate(); // Initialize navigate
//   const [formData, setFormData] = useState({
//     email: 'student@gmail.com',
//     password: 'password123',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);

//     // Mock authentication logic (replace with API integration)
//     if (formData.email === 'student@gmail.com' && formData.password === 'password123') {
//       // Navigate to StudentLandingPage after successful login
//       navigate('/StudentLandingPage');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background color
//         color: '#fff', // White text color for better contrast
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '400px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#f8f9fa', // Light gray background for the form
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '2px solid #D50032', // Red border color
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//             Student Login
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email address"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="password" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032', // Red button color
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Login
//           </button>

//           <p style={{ textAlign: 'center', marginTop: '15px' }}>
//             <small style={{ color: '#003366' }}>
//               Don't have an account?{' '}
//               <a href="/register" style={{ color: '#D50032' }}>
//                 Register
//               </a>
//             </small>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const LoginPage = () => {
//   const navigate = useNavigate(); // Initialize navigate
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);

//     // Mock authentication logic (replace with API integration)
//     if (formData.email === 'student@gmail.com' && formData.password === 'password123') {
//       // Navigate to StudentLandingPage for student login
//       navigate('/StudentLandingPage');
//     } else if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
//       // Navigate to AdminDashboardLandingPage for admin login
//       navigate('/AdminDashboardLandingPage');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background color
//         color: '#fff', // White text color for better contrast
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '400px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#f8f9fa', // Light gray background for the form
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '2px solid #D50032', // Red border color
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//             Login
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email address"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="password" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032', // Red button color
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Login
//           </button>

//           <p style={{ textAlign: 'center', marginTop: '15px' }}>
//             <small style={{ color: '#003366' }}>
//               Forgot Password?{' '}
//               <a href="/reset-password" style={{ color: '#D50032' }}>
//                 Reset
//               </a>
//             </small>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Link for navigation


// // Ensure the path to the logo image is correct
// import logo from "../assets/logo.jpg"

// const LoginPage = () => {
//   const navigate = useNavigate(); // Initialize navigate
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);

//     // Mock authentication logic (replace with API integration)
//     if (formData.email === 'student@gmail.com' && formData.password === 'password123') {
//       // Navigate to StudentLandingPage for student login
//       navigate('/StudentLandingPage');
//     } else if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
//       // Navigate to AdminDashboardLandingPage for admin login
//       navigate('/AdminDashboardLandingPage');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: '#000000',
//           padding: '10px 20px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
//           {/* Logo */}
//           <img src={logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} />
//           <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Tshwane University of Technology
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#fff' }} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ alignItems: 'center' }}>
//             {/* Home Link */}
//             <Link to="/">
//               <Button
//                 style={{
//                   backgroundColor: '#D50032',
//                   border: 'none',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '4px',
//                   fontWeight: 'bold',
//                   marginRight: '10px',
//                 }}
//               >
//                 Home
//               </Button>
//             </Link>
//             {/* <Link to="/login">
//               <Button
//                 style={{
//                   backgroundColor: '#D50032',
//                   border: 'none',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '4px',
//                   fontWeight: 'bold',
//                   marginRight: '10px',
//                 }}
//               >
//                 Login
//               </Button>
//             </Link> */}
//             <Link to="/AboutPage">
//               <Button
//                 style={{
//                   backgroundColor: '#D50032',
//                   border: 'none',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '4px',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 About
//               </Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Login Form */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '100vh',
//           backgroundColor: '#003366', // Blue background color
//           color: '#fff', // White text color for better contrast
//         }}
//       >
//         <div style={{ width: '100%', maxWidth: '400px' }}>
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               padding: '30px',
//               backgroundColor: '#f8f9fa', // Light gray background for the form
//               borderRadius: '8px',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               border: '2px solid #D50032', // Red border color
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//               Login
//             </h2>

//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="email" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your email address"
//                 style={{
//                   width: '100%',
//                   padding: '10px',
//                   borderRadius: '4px',
//                   border: '1px solid #003366', // Blue border
//                   textAlign: 'center',
//                 }}
//               />
//             </div>

//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="password" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your password"
//                 style={{
//                   width: '100%',
//                   padding: '10px',
//                   borderRadius: '4px',
//                   border: '1px solid #003366', // Blue border
//                   textAlign: 'center',
//                 }}
//               />
//             </div>

//             <button
//               type="submit"
//               style={{
//                 padding: '10px',
//                 backgroundColor: '#D50032', // Red button color
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//               }}
//             >
//               Login
//             </button>

//             <p style={{ textAlign: 'center', marginTop: '15px' }}>
//               <small style={{ color: '#003366' }}>
//                 Forgot Password?{' '}
//                 <a href="/reset-password" style={{ color: '#D50032' }}>
//                   Reset
//                 </a>
//               </small>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link for navigation
import logo from "../assets/logo.jpg";
import Footer from './components/Footer';
import axios from 'axios';
import BgImage from './components/BgImage.jpg';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Mock authentication logic (replace with API integration)
    if (formData.email === 'student@gmail.com' && formData.password === 'password123') {
      // Navigate to StudentLandingPage for student login
      navigate('/StudentLandingPage');
    } else if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
      // Navigate to AdminDashboardLandingPage for admin login
      navigate('/AdminDashboardLandingPage');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };*/

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
     const emailLocalPart = formData.email.split('@')[0];
  
    // Define the API URL for authentication
    const studentApiUrl = 'http://localhost:5167/api/Student/Login'; // Replace with your actual API URL
    const adminApiUrl = 'http://localhost:5167/api/Admin/Admin-Login';

    // Send POST request with email and password data

    const apiUrl = /^\d+$/.test(emailLocalPart) ? studentApiUrl : adminApiUrl;

    axios.post(apiUrl, {
      email: formData.email,
      password: formData.password
    })
    .then((response) => {
      // Extract the local part of the email (before '@')
      const emailLocalPart = formData.email.split('@')[0];
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      // Check if the local part consists only of digits (student email)
      if (/^\d+$/.test(emailLocalPart)) {
        navigate('/StudentLandingPage');
      } else {
        navigate('/AdminDashboardLandingPage');
      }
      
    })
    .catch((error) => {
      console.error('Error during login:', error);
      alert('Invalid credentials. Please try again.');
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Navbar expand="lg" style={{ backgroundColor: '#000000', padding: '10px 20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
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
              <Button style={{ backgroundColor: '#D50032', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', marginRight: '10px', marginBottom: '15px' }}>
                Home
              </Button>
            </Link>
            <Link to="/AboutPage">
              <Button style={{ backgroundColor: '#D50032', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', marginRight: '10px', marginBottom: '15px' }}>
                About
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Login Form */}
      <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   minHeight: '100vh',
        //   backgroundColor: '#003366',
        //   color: '#fff', 
        //   marginTop: "-100px"
        // }}
        style={{ display: 'flex', justifyContent: 'center', 
          alignItems: 'center', 
          flexGrow: 1, backgroundImage: `url(${BgImage})`,
           backgroundSize: 'cover', 
           backgroundPosition: 'center', 
           color: '#fff',
           marginTop: "-100px" }}

        
      >
        <div style={{ width: '100%', maxWidth: '400px' }}>
        <form onSubmit={handleSubmit} style={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '2px solid #D50032', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>Login</h2>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #003366', // Blue border
                  textAlign: 'center',
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #003366', // Blue border
                  textAlign: 'center',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '10px',
                backgroundColor: '#D50032', // Red button color
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Login
            </button>

            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              <small style={{ color: '#003366' }}>
                Forgot Password?{' '}
                <a href="/reset-password" style={{ color: '#D50032' }}>
                  Reset
                </a>
              </small>
            </p>
          </form>
        </div>
      </div>

      {/* Add the Footer component here */}
      <Footer />
    </div>
  );
};

export default LoginPage;

