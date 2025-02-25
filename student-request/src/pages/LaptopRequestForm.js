// // src/LaptopRequestForm.js
// import React, { useState } from 'react';

// const LaptopRequestForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     studentNumber: '',
//     reason: '',
//     academicYear: '',
//     status: 'Pending',
//     supportingDocuments: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, supportingDocuments: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here, you can handle the form submission, such as sending data to an API
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f1f1f1'
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '600px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#ffffff',
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '1px solid #003366',
//             display: 'flex',
//             flexDirection: 'column'
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#003366', fontWeight: 'bold' }}>
//             Laptop Request Form
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="fullName" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366',
//                 textAlign: 'center'
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="studentNumber" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Student Number
//             </label>
//             <input
//               type="text"
//               id="studentNumber"
//               name="studentNumber"
//               value={formData.studentNumber}
//               onChange={handleChange}
//               required
//               placeholder="Enter your student number"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366',
//                 textAlign: 'center'
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="reason" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Reason for Requesting a Laptop
//             </label>
//             <textarea
//               id="reason"
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               placeholder="Explain why you need a laptop"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366',
//                 textAlign: 'center',
//                 minHeight: '100px'
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="academicYear" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Current Academic Year/Level
//             </label>
//             <input
//               type="text"
//               id="academicYear"
//               name="academicYear"
//               value={formData.academicYear}
//               onChange={handleChange}
//               required
//               placeholder="Enter your current academic year/level"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366',
//                 textAlign: 'center'
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="supportingDocuments" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Upload Supporting Documents (Proof of Enrollment, Financial Statements)
//             </label>
//             <input
//               type="file"
//               id="supportingDocuments"
//               name="supportingDocuments"
//               onChange={handleFileChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366'
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer'
//             }}
//           >
//             Submit Request
//           </button>

//           <div style={{ marginTop: '20px', textAlign: 'center', color: '#003366' }}>
//             <p>Status: {formData.status}</p>
//             {/* Example of request status tracking */}
//             <p style={{ fontSize: '12px' }}>Track your request status above.</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LaptopRequestForm;


// import React, { useState } from 'react';

// const LaptopRequestForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     studentNumber: '',
//     reason: '',
//     academicYear: '',
//     status: 'Pending',
//     supportingDocuments: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, supportingDocuments: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here, you can handle the form submission, such as sending data to an API
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background color
//         color: '#fff', // Text color set to white for better contrast
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '600px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#f8f9fa', // Light background color for the form
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '2px solid #D50032', // Red border color
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//             Laptop Request Form
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="fullName" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
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
//             <label htmlFor="studentNumber" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Student Number
//             </label>
//             <input
//               type="text"
//               id="studentNumber"
//               name="studentNumber"
//               value={formData.studentNumber}
//               onChange={handleChange}
//               required
//               placeholder="Enter your student number"
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
//             <label htmlFor="reason" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Reason for Requesting a Laptop
//             </label>
//             <textarea
//               id="reason"
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               placeholder="Explain why you need a laptop"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//                 minHeight: '100px',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="academicYear" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Current Academic Year/Level
//             </label>
//             <input
//               type="text"
//               id="academicYear"
//               name="academicYear"
//               value={formData.academicYear}
//               onChange={handleChange}
//               required
//               placeholder="Enter your current academic year/level"
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
//             <label htmlFor="supportingDocuments" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Upload Supporting Documents (Proof of Enrollment, Financial Statements)
//             </label>
//             <input
//               type="file"
//               id="supportingDocuments"
//               name="supportingDocuments"
//               onChange={handleFileChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032', // Red background color for the button
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               marginTop: '20px',
//             }}
//           >
//             Submit Request
//           </button>

//           <div style={{ marginTop: '20px', textAlign: 'center', color: '#003366' }}>
//             <p>Status: {formData.status}</p>
//             {/* Example of request status tracking */}
//             <p style={{ fontSize: '12px', color: 'blue' }}>Track your request status above.</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LaptopRequestForm;


// import React, { useState } from 'react';

// const LaptopRequestForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     studentNumber: '',
//     reason: '',
//     academicYear: '',
//     supportingDocuments: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, supportingDocuments: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#003366', // Blue background
//         color: '#fff', // White text for contrast
//       }}
//     >
//       <div style={{ width: '100%', maxWidth: '600px' }}>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: '30px',
//             backgroundColor: '#f8f9fa', // Light background for form
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             border: '2px solid #D50032', // Red border
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
//             Computer Request Form
//           </h2>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="fullName" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
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
//             <label htmlFor="studentNumber" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Student Number
//             </label>
//             <input
//               type="text"
//               id="studentNumber"
//               name="studentNumber"
//               value={formData.studentNumber}
//               onChange={handleChange}
//               required
//               placeholder="Enter your student number"
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
//             <label htmlFor="reason" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Reason for Requesting a Laptop
//             </label>
//             <textarea
//               id="reason"
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               placeholder="Explain why you need a laptop"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//                 textAlign: 'center',
//                 minHeight: '100px',
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="academicYear" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Current Academic Year/Level
//             </label>
//             <input
//               type="text"
//               id="academicYear"
//               name="academicYear"
//               value={formData.academicYear}
//               onChange={handleChange}
//               required
//               placeholder="Enter your current academic year/level"
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
//             <label htmlFor="supportingDocuments" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
//               Upload Supporting Documents
//             </label>
//             <input
//               type="file"
//               id="supportingDocuments"
//               name="supportingDocuments"
//               onChange={handleFileChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '4px',
//                 border: '1px solid #003366', // Blue border
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: '10px',
//               backgroundColor: '#D50032', // Red background for the button
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               marginTop: '20px',
//             }}
//           >
//             Submit Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LaptopRequestForm;


// 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const LaptopRequestForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Surname: '',
    studentNumber: '',
    reason: '',
    academicYear: '',
    File: null, // File data
  });
  const [selectedFileName, setSelectedFileName] = useState("");
  const token = sessionStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        File: file,
      }));
      setSelectedFileName(file.name); // Store file name
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Surname", formData.Surname);
    formDataToSend.append("studentNumber", formData.studentNumber);
    formDataToSend.append("reason", formData.reason);
    formDataToSend.append("academicYear", formData.academicYear);
    formDataToSend.append("File", formData.File); // Append file
  
    // Debugging: Log all form data entries
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]); // Check if the file is added
    }
  
    try {
      const response = await axios.post("http://localhost:5167/api/Application/Computer-Application", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if(response.data.flag)
      {
        toast.success(response.data.message);
      }
      else{
        toast.error(response.data.message); 
      }
      console.log("Response:", response.data);
    } catch (e) {
      console.error("Something went wrong! Please try again later.", e);
    }
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
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '2px solid #D50032',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
          Computer Application Form
        </h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="Name" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366',
                textAlign: 'center',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="Surname" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Surname
            </label>
            <input
              type="text"
              id="Surname"
              name="Surname"
              value={formData.Surname}
              onChange={handleChange}
              required
              placeholder="Enter your surname"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366',
                textAlign: 'center',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="studentNumber" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Student Number
            </label>
            <input
              type="text"
              id="studentNumber"
              name="studentNumber"
              value={formData.studentNumber}
              onChange={handleChange}
              required
              placeholder="Enter your student number"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366',
                textAlign: 'center',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="reason" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Reason for Requesting a Laptop
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              placeholder="Explain why you need a laptop"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366',
                textAlign: 'center',
                minHeight: '100px',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="academicYear" style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}>
              Current Academic Year/Level
            </label>
            <input
              type="text"
              id="academicYear"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              required
              placeholder="Enter your current academic year/level"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366',
                textAlign: 'center',
              }}
            />
          </div>

       <div style={{ marginBottom: "15px" }}>
  <label
    htmlFor="supportingDocuments"
    style={{ display: "block", color: "#003366", fontWeight: "bold" }}
  >
    Upload Supporting Documents
  </label>
  <input
    type="file"
    id="supportingDocuments"
    name="File"
    onChange={handleFileChange}
    required
    style={{
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #003366",
    }}
  />
  
  {/* Display file name */}
  {selectedFileName && (
    <p style={{ color: "#003366", marginTop: "5px", fontWeight: "bold" }}>
      Selected file: {selectedFileName}
    </p>
  )}
</div>

          {/* <button
           type="submit"
           style={{
             padding: '10px',
             backgroundColor: '#D50032', // Red background for the button
             color: 'white',
             border: 'none',
             borderRadius: '4px',
             fontWeight: 'bold',
             cursor: 'pointer',
             marginTop: '20px',
            }}
          >
            Submit Request
          </button> */}
          <button
  type="submit"
  style={{
    padding: '10px',
    backgroundColor: '#D50032', // Red background for the button
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    width: '95%', // Make the button almost as wide as the form
    display: 'block', // Ensures the button spans the width
    marginLeft: 'auto', // Centers the button if the form is not full width
    marginRight: 'auto', // Centers the button
  }}
>
  Submit Request
</button>
        </form>
      </div>
    </div>
  );
};

export default LaptopRequestForm;
