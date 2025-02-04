import React, { useState, useEffect } from 'react';

const LaptopInventory = () => {
  // Mock data for inventory
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    // Fetch laptop inventory data (mocked here for demonstration purposes)
    const fetchComputers = async () => {
      const mockComputers = [
        {
          id: 1,
          serialNumber: 'SN123456',
          specifications: 'Intel i5, 8GB RAM, 256GB SSD',
          condition: 'Refurbished',
        },
        {
          id: 2,
          serialNumber: 'SN789012',
          specifications: 'Intel i7, 16GB RAM, 512GB SSD',
          condition: 'Refurbished',
        },
        {
          id: 3,
          serialNumber: 'SN345678',
          specifications: 'Intel i3, 4GB RAM, 128GB SSD',
          condition: 'Refurbished',
        },
      ];

      setComputers(mockComputers);
    };

    fetchComputers();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#003366',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#FFD700' }}></h1>

      {/* Inventory Metrics */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Total Computers</h3>
          <p>{computers.length}</p>
        </div>
        {/* <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>New Laptops</h3>
          <p>{laptops.filter(laptop => laptop.condition === 'New').length}</p>
        </div> */}
        <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Refurbished</h3>
          <p>{computers.filter(computer => computer.condition === 'Refurbished').length}</p>
        </div>
      </div>

      {/* Laptop Details Table */}
      <h2 style={{ color: '#FFD700' }}>Computer Details</h2>
      <table
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          color: '#000',
          borderRadius: '8px',
          overflow: 'hidden',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial Number</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Specifications</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Condition</th>
          </tr>
        </thead>
        <tbody>
          {computers.map(computer => (
            <tr key={computer.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.serialNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.specifications}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{computer.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaptopInventory;
