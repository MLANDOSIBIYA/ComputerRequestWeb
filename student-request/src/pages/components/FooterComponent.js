// src/components/FooterComponent.js
import React from "react";

const FooterComponent = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#fff",
        padding: "10px 20px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <p>&copy; 2025 Tshwane University of Technology. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
