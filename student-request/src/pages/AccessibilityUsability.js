// import React from "react";

// const AccessibilityUsability = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#f4f4f4",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h1 style={{ textAlign: "center", color: "#003366" }}>Accessibility and Usability</h1>

//       {/* Responsive Design Section */}
//       <section style={{ margin: "20px 0" }}>
//         <h2 style={{ color: "#D50032" }}>Responsive Design</h2>
//         <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
//           The system is designed to work seamlessly across devices, including desktops,
//           tablets, and smartphones. Users can easily access the platform regardless of
//           their device type, ensuring flexibility and convenience.
//         </p>
//       </section>

//       {/* Multi-language Support Section */}
//       <section style={{ margin: "20px 0" }}>
//         <h2 style={{ color: "#FFD700" }}>Multi-language Support</h2>
//         <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
//           If applicable, the system provides support for multiple languages to cater to
//           users from diverse linguistic backgrounds. Users can switch between supported
//           languages via the settings menu.
//         </p>
//       </section>

//       {/* User-friendly Interface Section */}
//       <section style={{ margin: "20px 0" }}>
//         <h2 style={{ color: "#003366" }}>User-friendly Interface</h2>
//         <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
//           The system is designed with an intuitive navigation structure and clear
//           instructions to ensure users can easily perform tasks such as submitting
//           requests, viewing status updates, and accessing notifications.
//         </p>
//       </section>

//       {/* Visual Example for Responsiveness */}
//       <div
//         style={{
//           margin: "20px auto",
//           maxWidth: "600px",
//           textAlign: "center",
//           border: "1px solid #003366",
//           padding: "20px",
//           borderRadius: "8px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <h3 style={{ color: "#D50032" }}>Try Resizing Your Window</h3>
//         <p style={{ fontSize: "14px" }}>
//           This system adapts to any screen size for optimal user experience.
//         </p>
//       </div>

//       {/* Footer */}
//       <footer
//         style={{
//           textAlign: "center",
//           marginTop: "40px",
//           padding: "10px 0",
//           backgroundColor: "#003366",
//           color: "#ffffff",
//         }}
//       >
//         <p>&copy; 2025 Tshwane University of Technology. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AccessibilityUsability;


import React from "react";

const AccessibilityUsability = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#003366", // Blue background
        color: "#fff", // White text for contrast
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#f8f9fa", // Light gray background
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid #D50032", // Red border
        }}
      >
        <h1 style={{ textAlign: "center", color: "#D50032", fontWeight: "bold" }}>
          Accessibility and Usability
        </h1>

        {/* Responsive Design Section */}
        <section style={{ margin: "20px 0" }}>
          <h2 style={{ color: "#D50032", fontWeight: "bold" }}>Responsive Design</h2>
          <p style={{ lineHeight: "1.6", color: "#003366" }}>
            The system is designed to work seamlessly across devices, including desktops,
            tablets, and smartphones. Users can easily access the platform regardless of
            their device type, ensuring flexibility and convenience.
          </p>
        </section>

        {/* Multi-language Support Section */}
        <section style={{ margin: "20px 0" }}>
          <h2 style={{ color: "#FFD700", fontWeight: "bold" }}>Multi-language Support</h2>
          <p style={{ lineHeight: "1.6", color: "#003366" }}>
            If applicable, the system provides support for multiple languages to cater to
            users from diverse linguistic backgrounds. Users can switch between supported
            languages via the settings menu.
          </p>
        </section>

        {/* User-friendly Interface Section */}
        <section style={{ margin: "20px 0" }}>
          <h2 style={{ color: "#003366", fontWeight: "bold" }}>User-friendly Interface</h2>
          <p style={{ lineHeight: "1.6", color: "#003366" }}>
            The system is designed with an intuitive navigation structure and clear
            instructions to ensure users can easily perform tasks such as submitting
            requests, viewing status updates, and accessing notifications.
          </p>
        </section>

        {/* Visual Example for Responsiveness */}
        <div
          style={{
            margin: "20px auto",
            textAlign: "center",
            border: "1px solid #003366",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <h3 style={{ color: "#D50032", fontWeight: "bold" }}>Try Resizing Your Window</h3>
          <p style={{ color: "#003366" }}>
            This system adapts to any screen size for optimal user experience.
          </p>
        </div>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "10px 0",
            backgroundColor: "#003366",
            color: "#ffffff",
            borderRadius: "4px",
          }}
        >
          <p>&copy; 2025 Tshwane University of Technology. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AccessibilityUsability;
