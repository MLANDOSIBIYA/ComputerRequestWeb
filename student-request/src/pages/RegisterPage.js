// // src/RegisterPage.js
// import React, { useState } from 'react';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     studentId: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you can handle form submission, like sending data to an API
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4" style={{ color: '#003366' }}>Student Registration</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit} className="shadow p-4 border rounded" style={{ backgroundColor: '#f8f9fa' }}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label" style={{ color: '#003366' }}>Full Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label" style={{ color: '#003366' }}>Email Address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="studentId" className="form-label" style={{ color: '#003366' }}>Student ID</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="studentId"
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label" style={{ color: '#003366' }}>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-danger w-100 mt-3" style={{ backgroundColor: '#D50032' }}>
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// import React, { useState } from 'react';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     studentId: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4" style={{ color: '#003366', fontWeight: 'bold' }}>
//         Student Registration
//       </h2>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit} className="shadow-lg p-4 border rounded" style={{ backgroundColor: '#f8f9fa' }}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label" style={{ color: '#003366', fontWeight: 'bold' }}>Full Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your full name"
//                 style={{ borderColor: '#003366' }}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label" style={{ color: '#003366', fontWeight: 'bold' }}>Email Address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your email address"
//                 style={{ borderColor: '#003366' }}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="studentId" className="form-label" style={{ color: '#003366', fontWeight: 'bold' }}>Student ID</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="studentId"
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your student ID"
//                 style={{ borderColor: '#003366' }}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label" style={{ color: '#003366', fontWeight: 'bold' }}>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your password"
//                 style={{ borderColor: '#003366' }}
//               />
//             </div>

//             <button type="submit" className="btn btn-danger w-100 mt-3" style={{ backgroundColor: '#D50032', fontWeight: 'bold' }}>
//               Register
//             </button>

//             <p className="text-center mt-3">
//               <small style={{ color: '#003366' }}>
//                 Already have an account? <a href="/login" style={{ color: '#D50032' }}>Login</a>
//               </small>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#003366', // Blue background color
        color: '#fff', // White text color for better contrast
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '30px',
            backgroundColor: '#f8f9fa', // Light gray background for the form
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '2px solid #D50032', // Red border color
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
            Student Registration
          </h2>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
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
            <label htmlFor="studentId" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Student Number
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              placeholder="Enter your student ID"
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
            Register
          </button>

          <p style={{ textAlign: 'center', marginTop: '15px' }}>
            <small style={{ color: '#003366' }}>
              Already have an account?{' '}
              <a href="/login" style={{ color: '#D50032' }}>
                Login
              </a>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

