// import React, { useState, useEffect } from 'react';

// const LaptopInventory = () => {
//   // Mock data for inventory
//   const [computers, setComputers] = useState([]);

//   useEffect(() => {
//     // Fetch laptop inventory data (mocked here for demonstration purposes)
//     const fetchComputers = async () => {
//       const mockComputers = [
//         {
//           id: 1,
//           serialNumber: 'SN123456',
//           specifications: 'Intel i5, 8GB RAM, 256GB SSD',
//           condition: 'Refurbished',
//         },
//         {
//           id: 2,
//           serialNumber: 'SN789012',
//           specifications: 'Intel i7, 16GB RAM, 512GB SSD',
//           condition: 'Refurbished',
//         },
//         {
//           id: 3,
//           serialNumber: 'SN345678',
//           specifications: 'Intel i3, 4GB RAM, 128GB SSD',
//           condition: 'Refurbished',
//         },
//       ];

//       setComputers(mockComputers);
//     };

//     fetchComputers();
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: '#003366',
//         color: '#ffffff',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       <h1 style={{ textAlign: 'center', color: '#FFD700' }}></h1>

//       {/* Inventory Metrics */}
//       <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//         <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//           <h3>Total Computers</h3>
//           <p>{computers.length}</p>
//         </div>
//         {/* <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//           <h3>New Laptops</h3>
//           <p>{laptops.filter(laptop => laptop.condition === 'New').length}</p>
//         </div> */}
//         <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//           <h3>Refurbished</h3>
//           <p>{computers.filter(computer => computer.condition === 'Refurbished').length}</p>
//         </div>
//       </div>

//       {/* Laptop Details Table */}
//       <h2 style={{ color: '#FFD700' }}>Computer Details</h2>
//       <table
//         style={{
//           width: '100%',
//           backgroundColor: '#ffffff',
//           color: '#000',
//           borderRadius: '8px',
//           overflow: 'hidden',
//           textAlign: 'left',
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial Number</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Specifications</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Condition</th>
//           </tr>
//         </thead>
//         <tbody>
//           {computers.map(computer => (
//             <tr key={computer.id}>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.id}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.serialNumber}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.specifications}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.condition}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LaptopInventory;
// import React, { useState, useEffect } from 'react';

// const LaptopInventory = () => {
//   // State for the inventory and form input values
//   const [computers, setComputers] = useState([]);
//   const [serialNumber, setSerialNumber] = useState('');
//   const [specifications, setSpecifications] = useState('');
//   const [condition, setCondition] = useState('Refurbished');

//   useEffect(() => {
//     // Fetch laptop inventory data (mocked here for demonstration purposes)
//     const fetchComputers = async () => {
//       const mockComputers = [
//         // {
//         //   id: 1,
//         //   serialNumber: 'SN123456',
//         //   specifications: 'Intel i5, 8GB RAM, 256GB SSD',
//         //   condition: 'Refurbished',
//         // },
//         // {
//         //   id: 2,
//         //   serialNumber: 'SN789012',
//         //   specifications: 'Intel i7, 16GB RAM, 512GB SSD',
//         //   condition: 'Refurbished',
//         // },
//         // {
//         //   id: 3,
//         //   serialNumber: 'SN345678',
//         //   specifications: 'Intel i3, 4GB RAM, 128GB SSD',
//         //   condition: 'Refurbished',
//         // },
//       ];

//       setComputers(mockComputers);
//     };

//     fetchComputers();
//   }, []);

//   // Function to handle adding a new computer
//   const addComputer = () => {
//     const newComputer = {
//       id: computers.length + 1,
//       serialNumber,
//       specifications,
//       condition,
//     };
//     setComputers([...computers, newComputer]);
//     // Clear the input fields after adding
//     setSerialNumber('');
//     setSpecifications('');
//     setCondition('Refurbished');
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: '#003366',
//         color: '#ffffff',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       {/* <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Laptop Inventory</h1> */}

//       {/* Inventory Metrics */}
//       <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//         <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//           <h3>Total Refurbished Computers</h3>
//           <p>{computers.length}</p>
//         </div>
//         {/* <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//           <h3>Refurbished</h3>
//           <p>{computers.filter(computer => computer.condition === 'Refurbished').length}</p>
//         </div> */}
//       </div>

//       {/* Form to input new computer details */}
//       <h2 style={{ color: '#FFD700' }}>Add New Computer</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ color: '#FFD700' }}>Serial Number:</label>
//         <input
//           type="text"
//           placeholder="Enter serial number"
//           value={serialNumber}
//           onChange={(e) => setSerialNumber(e.target.value)}
//           style={{
//             marginLeft: '10px',
//             padding: '5px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ color: '#FFD700' }}>Specifications:</label>
//         <input
//           type="text"
//           placeholder="Enter specifications"
//           value={specifications}
//           onChange={(e) => setSpecifications(e.target.value)}
//           style={{
//             marginLeft: '10px',
//             padding: '5px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ color: '#FFD700' }}>Condition:</label>
//         <select
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           style={{
//             marginLeft: '10px',
//             padding: '5px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         >
//           <option value="Refurbished">Refurbished</option>
//           <option value="New">New</option>
//         </select>
//       </div>

//       <button
//         onClick={addComputer}
//         style={{
//           backgroundColor: '#FFD700',
//           color: '#003366',
//           padding: '10px 20px',
//           borderRadius: '8px',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//       >
//         Add Computer
//       </button>

//       {/* Laptop Details Table */}
//       <h2 style={{ color: '#FFD700' }}>Computer Details</h2>
//       <table
//         style={{
//           width: '100%',
//           backgroundColor: '#ffffff',
//           color: '#000',
//           borderRadius: '8px',
//           overflow: 'hidden',
//           textAlign: 'left',
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial Number</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Specifications</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Condition</th>
//           </tr>
//         </thead>
//         <tbody>
//           {computers.map((computer) => (
//             <tr key={computer.id}>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.id}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.serialNumber}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.specifications}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.condition}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LaptopInventory;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LaptopInventory = () => {
//   // Mock data for inventory
//   const [computers, setComputers] = useState([]);
//   const [newComputer, setNewComputer] = useState({
//     ComputerName: '',
//     ComputerVersion: '',
//     serialNumber: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewComputer({ ...newComputer, [name]: value });
//   };

//   const apiUrl = "http://localhost:5167/api/Computer/Add-Computer";
//   const addComputer = async () => {
//     if (newComputer.ComputerName && newComputer.ComputerVersion && newComputer.serialNumber) {
//       const newComputerWithId = {
//         ...newComputer,
//         id: computers.length + 1, // generate new id based on current list length
//         condition: 'Refurbished', // Default condition
//       };
  
//       try {
//         // Make POST request to the API
//         const response = await axios.post(apiUrl, newComputer);
        
//         // Handle response and add to the list if successful
//         if (response.status === 200 || response.status === 201) {
//           setComputers([...computers, newComputerWithId]);
//           setNewComputer({ ComputerName: '', ComputerVersion: '', serialNumber: '' });
//         } else {
//           alert('Failed to add computer.');
//         }
//       } catch (error) {
//         // Log the error to the console for debugging
//         console.error('Error adding computer:', error);
//         alert('An error occurred while adding the computer.');
//       }
//     } else {
//       alert('Please fill all fields');
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: '#003366',
//         color: '#ffffff',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       {/* <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Laptop Inventory</h1> */}

//       {/* New Computer Form */}
//       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
//         <input
//           type="text"
//           name="ComputerName"  // Changed name to match the state property
//           placeholder="Computer Name"
//           value={newComputer.ComputerName}
//           onChange={handleInputChange}
//           style={{
//             margin: '5px',
//             padding: '10px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />
//         <input
//           type="text"
//           name="ComputerVersion"  // Changed name to match the state property
//           placeholder="Computer Version"
//           value={newComputer.ComputerVersion}
//           onChange={handleInputChange}
//           style={{
//             margin: '5px',
//             padding: '10px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />
//         <input
//           type="text"
//           name="serialNumber"
//           placeholder="Serial Number"
//           value={newComputer.serialNumber}
//           onChange={handleInputChange}
//           style={{
//             margin: '5px',
//             padding: '10px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />
//         <button
//           onClick={addComputer}
//           style={{
//             backgroundColor: '#FFD700',
//             padding: '10px 20px',
//             borderRadius: '4px',
//             color: '#003366',
//             cursor: 'pointer',
//           }}
//         >
//           Add Computer
//         </button>
//       </div>

//       {/* Inventory Metrics */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-around',
//           marginBottom: '20px',
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: '#D50032',
//             padding: '20px',
//             borderRadius: '8px',
//             textAlign: 'center',
//           }}
//         >
//           <h3>Total Refurbished Computers</h3>
//           <p>{computers.length}</p>
//         </div>
//         {/* <div
//           style={{
//             backgroundColor: '#000',
//             padding: '20px',
//             borderRadius: '8px',
//             textAlign: 'center',
//           }}
//         >
//           <h3>Refurbished</h3>
//           <p>{computers.filter((computer) => computer.condition === 'Refurbished').length}</p>
//         </div> */}
//       </div>

//       {/* Laptop Details Table */}
//       <h2 style={{ color: '#FFD700' }}>Computer Details</h2>
//       <table
//         style={{
//           width: '100%',
//           backgroundColor: '#ffffff',
//           color: '#000',
//           borderRadius: '8px',
//           overflow: 'hidden',
//           textAlign: 'left',
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Version</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial Number</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Condition</th>
//           </tr>
//         </thead>
//         <tbody>
//           {computers.map((computer) => (
//             <tr key={computer.id}>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.id}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.ComputerName}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.ComputerVersion}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.serialNumber}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.condition}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LaptopInventory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LaptopInventory = () => {
  const [computers, setComputers] = useState([]);
  const [newComputer, setNewComputer] = useState({
    ComputerName: '',
    ComputerVersion: '',
    serialNumber: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const apiUrl = "http://localhost:5167/api/Computer/Add-Computer";
  const viewPcApi = "http://localhost:5167/api/Computer/veiw-computers";

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await axios.get(viewPcApi);
        setComputers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching computers:', error);
        alert('Failed to load computer data');
      }
    };

    fetchComputers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComputer({ ...newComputer, [name]: value });
  };

  const addComputer = async () => {
    if (newComputer.ComputerName && newComputer.ComputerVersion && newComputer.serialNumber) {
      try {
        const response = await axios.post(apiUrl, newComputer);
        if (response.status === 200 || response.status === 201) {
          setComputers([...computers, response.data]);
          setNewComputer({ computerName: '', computerVersion: '', serialNumber: '' });
        } else {
          alert('Failed to add computer.');
        }
      } catch (error) {
        console.error('Error adding computer:', error);
        alert('An error occurred while adding the computer.');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div style={{ backgroundColor: '#003366', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Total Refurbished Computers</h3>
          <p>{computers.length}</p>
        </div>
      </div>

      <button onClick={toggleForm} style={{ backgroundColor: '#FFD700', padding: '10px 20px', borderRadius: '10px', color: '#000', cursor: 'pointer', marginBottom: '20px' }}>
        {isFormVisible ? 'Close New Computer Form' : 'Add New Computer'}
      </button>

      {isFormVisible && (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <input type="text" name="ComputerName" placeholder="Computer Name" value={newComputer.ComputerName} onChange={handleInputChange} style={{ margin: '5px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" name="ComputerVersion" placeholder="Computer Version" value={newComputer.ComputerVersion} onChange={handleInputChange} style={{ margin: '5px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" name="serialNumber" placeholder="Serial Number" value={newComputer.serialNumber} onChange={handleInputChange} style={{ margin: '5px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button onClick={addComputer} style={{ backgroundColor: '#FFD700', padding: '10px 20px', borderRadius: '10px', color: '#000', cursor: 'pointer' }}>
            Add Computer
          </button>
        </div>
      )}

      <h2 style={{ color: '#FFD700' }}>Computer Details</h2>
      <table style={{ width: '100%', backgroundColor: '#ffffff', color: '#000', borderRadius: '8px', overflow: 'hidden', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Version</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial Number</th>
            {/* <th style={{ padding: '10px', border: '1px solid #ccc' }}>Condition</th> */}
          </tr>
        </thead>
        <tbody>
          {computers.map((computer) => (
            <tr key={computer.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.computerId}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.computerName}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.computerVersion}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.serialNumber}</td>
              {/* <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.condition}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaptopInventory;

