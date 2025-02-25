// import React, { useState, useEffect } from 'react';
// import { saveAs } from 'file-saver';
// import { jsPDF } from 'jspdf';
// import { Chart } from 'react-google-charts';
// import axios from 'axios';

// const ReportingAnalytics = () => {
//   const [reports, setReports] = useState({
//     totalRequests: 0,
//     approvedRequests: 0,
//     distributedComputers: 0,
//     awaitingComputers: 0,
//   });

//   const [monthlyData, setMonthlyData] = useState([]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const allApplicationsResponse = await axios.get("http://localhost:5167/api/Application/applications-count");
//         const approvedApplicationsResponse = await axios.get("http://localhost:5167/api/Application/get-approved-applications");
  
//         console.log("All Applications Response:", allApplicationsResponse.data);
//         console.log("Approved Applications Response:", approvedApplicationsResponse.data);
  
//         setReports({
//           totalRequests: allApplicationsResponse.data.length || 0, // Assuming it's an array
//           approvedRequests: approvedApplicationsResponse.data.length || 0,
//           distributedComputers: 85,
//           awaitingComputers: 30,
//         });
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };
  
//     fetchReports();
//   }, []);
  


//   const exportAsPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Reporting and Analytics", 10, 10);
//     doc.text(`Total Requests: ${reports.totalRequests}`,10,10);
//     doc.text(`Approved Requests: ${reports.approvedRequests}`, 10, 30);
//     doc.text(`Distributed Computers: ${reports.distributedComputers}`, 10, 40);
//     doc.text(`Awaiting Computers: ${reports.awaitingComputers}`, 10, 50);
//     doc.save("reports.pdf");
//   };

//   const exportAsExcel = () => {
//     const csvContent = [
//       ["Metric", "Value"],
//       ["Total Requests", reports.totalRequests],
//       ["Approved Requests", reports.approvedRequests],
//       ["Distributed Computers", reports.distributedComputers],
//       ["Awaiting Computers", reports.awaitingComputers],
//     ]
//       .map(e => e.join(","))
//       .join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "reports.csv");
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#003366",
//         color: "#ffffff",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h1 style={{ textAlign: "center", color: "#FFD700" }}></h1>

//       {/* Summary Metrics */}
//       <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
//         <div style={{ backgroundColor: "#D50032", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
//           <h3>Total Requests</h3>
//           <p>{reports.totalRequests}</p>
//         </div>
//         <div style={{ backgroundColor: "#FFD700", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
//           <h3>Approved Requests</h3>
//           <p>{reports.approvedRequests}</p>
//         </div>
//         <div style={{ backgroundColor: "#D50032", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
//           <h3>Distributed Computers</h3>
//           <p>{reports.distributedComputers}</p>
//         </div>
//         <div style={{ backgroundColor: "#000", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
//           <h3>Awaiting Computers</h3>
//           <p>{reports.awaitingComputers}</p>
//         </div>
//       </div>

//       {/* Graphical Reports */}
//       <h2 style={{ color: "#FFD700" }}>Monthly Request Trends</h2>
//       <div style={{ marginBottom: "20px" }}>
//         <Chart
//           chartType="Bar"
//           width="100%"
//           height="400px"
//           data={monthlyData}
//           options={{
//             legend: { position: "none" },
//             chart: { title: "Monthly Requests" },
//             colors: ["#D50032"],
//           }}
//         />
//       </div>

//       {/* Export Buttons */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={exportAsPDF}
//           style={{
//             padding: "10px 20px",
//             marginRight: "10px",
//             backgroundColor: "#FFD700",
//             color: "#000",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Export as PDF
//         </button>
//         <button
//           onClick={exportAsExcel}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#D50032",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Export as Excel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportingAnalytics;


import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { Chart } from 'react-google-charts';

const ReportingAnalytics = () => {
  const [reports, setReports] = useState({
    totalRequests: 100,
    approvedRequests: 75,
    distributedComputers: 85,
    awaitingComputers: 30,
  });

  const [monthlyData, setMonthlyData] = useState([
    ['Month', 'Requests'],
    ['January', 10],
    ['February', 20],
    ['March', 30],
    ['April', 40],
    ['May', 50],
    ['June', 60],
  ]);

  const exportAsPDF = () => {
    const doc = new jsPDF();
    doc.text('Reporting and Analytics', 10, 10);
    doc.text(`Total Requests: ${reports.totalRequests}`, 10, 20);
    doc.text(`Approved Requests: ${reports.approvedRequests}`, 10, 30);
    doc.text(`Distributed Computers: ${reports.distributedComputers}`, 10, 40);
    doc.text(`Awaiting Computers: ${reports.awaitingComputers}`, 10, 50);
    doc.save('reports.pdf');
  };

  const exportAsExcel = () => {
    const csvContent = [
      ['Metric', 'Value'],
      ['Total Requests', reports.totalRequests],
      ['Approved Requests', reports.approvedRequests],
      ['Distributed Computers', reports.distributedComputers],
      ['Awaiting Computers', reports.awaitingComputers],
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'reports.csv');
  };

  return (
    <div
      style={{
        backgroundColor: '#003366',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Reporting and Analytics</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Total Requests</h3>
          <p>{reports.totalRequests}</p>
        </div>
        <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Approved Requests</h3>
          <p>{reports.approvedRequests}</p>
        </div>
        <div style={{ backgroundColor: '#D50032', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Distributed Computers</h3>
          <p>{reports.distributedComputers}</p>
        </div>
        <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Awaiting Computers</h3>
          <p>{reports.awaitingComputers}</p>
        </div>
      </div>

      <h2 style={{ color: '#FFD700' }}>Monthly Request Trends</h2>
      <div style={{ marginBottom: '20px' }}>
        <Chart
          chartType='Bar'
          width='100%'
          height='400px'
          data={monthlyData}
          options={{
            legend: { position: 'none' },
            chart: { title: 'Monthly Requests' },
            colors: ['#D50032'],
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={exportAsPDF}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#FFD700',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Export as PDF
        </button>
        <button
          onClick={exportAsExcel}
          style={{
            padding: '10px 20px',
            backgroundColor: '#D50032',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Export as Excel
        </button>
      </div>
    </div>
  );
};

export default ReportingAnalytics;
