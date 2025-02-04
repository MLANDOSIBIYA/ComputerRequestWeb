// import React, { useState } from 'react';

// const SupportAndFeedback = () => {
//   const [feedback, setFeedback] = useState("");
//   const [liveChatMessages, setLiveChatMessages] = useState([]);
//   const [chatInput, setChatInput] = useState("");

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for your feedback!");
//     setFeedback("");
//   };

//   const handleChatSubmit = (e) => {
//     e.preventDefault();
//     if (chatInput.trim()) {
//       setLiveChatMessages([...liveChatMessages, { sender: "Student", message: chatInput }]);
//       setChatInput("");
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#f1f1f1", padding: "20px" }}>
//       <h1 style={{ textAlign: "center", color: "#003366" }}>Support and Feedback</h1>

//       {/* Help Section */}
//       <section style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#D50032" }}>Help Section</h2>
//         <ul style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
//           <li>How do I request a laptop? - Go to the "Laptop Request" page and fill out the form.</li>
//           <li>What happens after I submit my request? - Your request will be reviewed, and you'll receive notifications about its status.</li>
//           <li>Who can I contact for more help? - Email us at myTUTor@tut.ac.za or call (012) 382 4427.</li>
//         </ul>
//       </section>

//       {/* Feedback Form */}
//       <section style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#D50032" }}>Feedback Form</h2>
//         <form onSubmit={handleFeedbackSubmit} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             placeholder="Provide your feedback here..."
//             rows="5"
//             style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//           ></textarea>
//           <button
//             type="submit"
//             style={{
//               marginTop: "10px",
//               padding: "10px 20px",
//               backgroundColor: "#003366",
//               color: "#fff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </section>

//       {/* Live Chat */}
//       <section>
//         <h2 style={{ color: "#D50032" }}>Live Chat</h2>
//         <div
//           style={{
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "8px",
//             maxHeight: "300px",
//             overflowY: "auto",
//           }}
//         >
//           {liveChatMessages.length === 0 ? (
//             <p style={{ color: "#666" }}>No messages yet. Start a conversation!</p>
//           ) : (
//             liveChatMessages.map((msg, index) => (
//               <div key={index} style={{ marginBottom: "10px" }}>
//                 <strong>{msg.sender}: </strong>
//                 <span>{msg.message}</span>
//               </div>
//             ))
//           )}
//         </div>
//         <form onSubmit={handleChatSubmit} style={{ marginTop: "10px" }}>
//           <input
//             type="text"
//             value={chatInput}
//             onChange={(e) => setChatInput(e.target.value)}
//             placeholder="Type your message..."
//             style={{ width: "80%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//           <button
//             type="submit"
//             style={{
//               padding: "10px 20px",
//               marginLeft: "10px",
//               backgroundColor: "#003366",
//               color: "#fff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Send
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default SupportAndFeedback;


import React, { useState } from "react";

const SupportAndFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [liveChatMessages, setLiveChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setLiveChatMessages([...liveChatMessages, { sender: "Student", message: chatInput }]);
      setChatInput("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          color: "#000",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#D50032", marginBottom: "30px" }}>
          Support and Feedback
        </h1>

        {/* Help Section */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Help Section</h2>
          <ul
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
              lineHeight: "1.6",
            }}
          >
            <li>How do I request a laptop? - Go to the "Laptop Request" page and fill out the form.</li>
            <li>
              What happens after I submit my request? - Your request will be reviewed, and you'll
              receive notifications about its status.
            </li>
            <li>
              Who can I contact for more help? - Email us at{" "}
              <a
                href="mailto:myTUTor@tut.ac.za"
                style={{ color: "#D50032", textDecoration: "underline" }}
              >
                myTUTor@tut.ac.za
              </a>{" "}
              or call (012) 382 4427.
            </li>
          </ul>
        </section>

        {/* Feedback Form */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Feedback Form</h2>
          <form
            onSubmit={handleFeedbackSubmit}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Provide your feedback here..."
              rows="5"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#003366",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit Feedback
            </button>
          </form>
        </section>

        {/* Live Chat */}
        <section>
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>Live Chat</h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
              maxHeight: "200px",
              overflowY: "auto",
              marginBottom: "15px",
            }}
          >
            {liveChatMessages.length === 0 ? (
              <p style={{ color: "#666" }}>No messages yet. Start a conversation!</p>
            ) : (
              liveChatMessages.map((msg, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <strong>{msg.sender}: </strong>
                  <span>{msg.message}</span>
                </div>
              ))
            )}
          </div>
          <form
            onSubmit={handleChatSubmit}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                marginLeft: "10px",
                padding: "10px 20px",
                backgroundColor: "#003366",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SupportAndFeedback;
