// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: '#fff',
        padding: '15px 50px',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
        // marginTop: "-50px"
      }}
    >
      <p>&copy; 2025 Tshwane University of Technology. All rights reserved  . 
      <p>
        <a href="/terms-of-use" className="text-decoration-none">
          Terms & Conditions
        </a>
        
      </p>
      </p>
    </footer>
  );
};

export default Footer;
