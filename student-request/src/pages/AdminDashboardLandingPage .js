// import React, { useState } from 'react';

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const sections = {
//     Dashboard: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Dashboard Overview</h2>
//         <p style={{ color: '#ffffff' }}>
//           Welcome to the Admin Dashboard! Use the sidebar to navigate through different sections.
//         </p>
//       </div>
//     ),
//     Requests: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Manage Requests</h2>
//         <p style={{ color: '#ffffff' }}>
//           View and manage all the requests submitted by students.
//         </p>
//       </div>
//     ),
//     Notifications: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Notifications</h2>
//         <p style={{ color: '#ffffff' }}>
//           Review notifications sent to students about their request status.
//         </p>
//       </div>
//     ),
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Admin Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map(section => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => setActiveSection(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Admin Dashboard</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Admin Dashboard</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const navigate = useNavigate(); // Hook for navigation

//   const sections = {
//     Dashboard: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Dashboard Overview</h2>
//         <p style={{ color: '#ffffff' }}>
//           Welcome to the Admin Dashboard! Use the sidebar to navigate through different sections.
//         </p>
//       </div>
//     ),
//     Requests: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Manage Requests</h2>
//         <p style={{ color: '#ffffff' }}>
//           View and manage all the requests submitted by students.
//         </p>
//       </div>
//     ),
//     Notifications: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Notifications</h2>
//         <p style={{ color: '#ffffff' }}>
//           Review notifications sent to students about their request status.
//         </p>
//       </div>
//     ),
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   const handleNavigation = section => {
//     setActiveSection(section);

//     if (section === 'Dashboard') {
//       navigate('/AdminDashboard'); // Redirect to AdminDashboard
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Admin Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map(section => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => handleNavigation(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Admin Dashboard</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Admin Dashboard</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;

// import React, { useState } from 'react';
// import AdminDashboard from './AdminDashboard'; // Import AdminDashboard
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const sections = {
//     Dashboard: < ReportingAnalytics/>, // Display AdminDashboard on Dashboard section
//     Notifications: <NotificationsPage />,
//     Requests: <AdminDashboard />,
//     Requests: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Manage Requests</h2>
//         <p style={{ color: '#ffffff' }}>
//           View and manage all the requests submitted by students.
//         </p>
//       </div>
//     ),
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Admin Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map((section) => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => setActiveSection(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Admin Dashboard</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Admin Dashboard</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


// import React, { useState } from 'react';
// import AdminDashboard from './AdminDashboard'; 
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';


// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification/>,
//     Notifications: <NotificationsPage />,
//     Histoy: <LaptopInventory/>,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: '#003366',
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         style={{
//           width: '250px',
//           backgroundColor: '#000',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <div>
//           <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Admin Panel</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {Object.keys(sections).map((section) => (
//               <li key={section} style={{ marginBottom: '30px' }}>
//                 <button
//                   onClick={() => setActiveSection(section)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                     color: activeSection === section ? '#000' : '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <p style={{ color: '#FFD700', fontSize: '14px' }}>Welcome, Admin!</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//         {sections[activeSection]}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


// import React, { useState } from 'react';
// import AdminDashboard from './AdminDashboard';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification />,
//     Notifications: <NotificationsPage />,
//     History: <LaptopInventory />,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <div style={{ backgroundColor: '#000', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           style={{ backgroundColor: '#D50032', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
//         >
//           {sidebarOpen ? 'Hide Menu' : 'Show Menu'}
//         </button>
//         <h2 style={{ color: '#FFD700', margin: 0 }}>Admin Dashboard</h2>
//         <div>
//           <button style={{ marginRight: '10px', backgroundColor: '#FFD700', color: '#000', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Settings</button>
//           <button style={{ backgroundColor: '#D50032', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Logout</button>
//         </div>
//       </div>

//       <div style={{ display: 'flex' }}>
//         {/* Sidebar */}
//         {sidebarOpen && (
//           <div style={{ width: '250px', backgroundColor: '#000', padding: '20px', minHeight: '100vh' }}>
//             <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Admin Panel</h2>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '15px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


// import React, { useState } from 'react';
// import AdminDashboard from './AdminDashboard';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';
// import { BsThreeDots } from 'react-icons/bs';


// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification />,
//     Notifications: <NotificationsPage />,
//     History: <LaptopInventory />,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <div 
//         style={{ 
//           backgroundColor: '#000', 
//           padding: '15px', 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center'
//         }}
//       >
//         <h2 style={{ color: '#FFD700', margin: 0 }}>Admin Dashboard</h2>
//         <div>
//           <button 
//             style={{ 
//               backgroundColor: '#D50032', 
//               color: '#fff', 
//               padding: '10px', 
//               borderRadius: '4px', 
//               border: 'none', 
//               cursor: 'pointer' 
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div style={{ display: 'flex', marginTop: '10px' }}> 
//         {/* Sidebar (Hidden or Shown) */}
//         <div 
//           style={{ 
//             width: sidebarOpen ? '250px' : '50px', 
//             backgroundColor: '#000', 
//             padding: '20px', 
//             minHeight: '100vh',
//             transition: 'width 0.3s ease-in-out',
//             position: 'relative'
//           }}
//         >
//           {/* Toggle Button (Always in the same position) */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             {sidebarOpen && <h2 style={{ color: '#FFD700' }}></h2>}
//             <BsThreeDots 
//               onClick={() => setSidebarOpen(!sidebarOpen)} 
//               style={{ color: '#FFD700', cursor: 'pointer', fontSize: '50px' }} 
//             />
//           </div>

//           {/* Sidebar Menu (Only visible when sidebar is open) */}
//           {sidebarOpen && (
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '15px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;



// import React, { useState } from 'react'; 
// import AdminDashboard from './AdminDashboard';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';
// import { BsThreeDots } from 'react-icons/bs';
// import logo from "./logo.jpg";

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification />,
//     Notifications: <NotificationsPage />,
//     History: <LaptopInventory />,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <div 
//         style={{ 
//           backgroundColor: '#000', 
//           padding: '15px', 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center'
//         }}
//       >
//         {/* Logo */}
//         <img 
//           src="logo.jpg"
//           alt="logo" 
//           style={{ height: '40px', width: 'auto' }} 
//         />
        
//         <h2 style={{ color: '#FFD700', margin: 0 }}></h2>
//         <div>
//           <button 
//             style={{ 
//               backgroundColor: '#D50032', 
//               color: '#fff', 
//               padding: '10px', 
//               borderRadius: '4px', 
//               border: 'none', 
//               cursor: 'pointer' 
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div style={{ display: 'flex', marginTop: '10px' }}> 
//         {/* Sidebar (Hidden or Shown) */}
//         <div 
//           style={{ 
//             width: sidebarOpen ? '250px' : '50px', 
//             backgroundColor: '#000', 
//             padding: '20px', 
//             minHeight: '100vh',
//             transition: 'width 0.3s ease-in-out',
//             position: 'relative'
//           }}
//         >
//           {/* Toggle Button (Always in the same position) */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             {sidebarOpen && <h2 style={{ color: '#FFD700' }}></h2>}
//             <BsThreeDots 
//               onClick={() => setSidebarOpen(!sidebarOpen)} 
//               style={{ color: '#FFD700', cursor: 'pointer', fontSize: '50px' }} 
//             />
//           </div>

//           {/* Sidebar Menu (Only visible when sidebar is open) */}
//           {sidebarOpen && (
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '15px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


// import React, { useState } from 'react'; 
// import AdminDashboard from './AdminDashboard';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';
// import { BsThreeDots } from 'react-icons/bs';
// import logo from "./logo.jpg";

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification />,
//     Notifications: <NotificationsPage />,
//     History: <LaptopInventory />,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <div 
//         style={{ 
//           backgroundColor: '#000408', 
//           padding: '10px 20px', 
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center'
//         }}
//       >
//         {/* Logo and Text */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img 
//             src={logo} 
//             alt="logo" 
//             style={{ height: '50px', marginRight: '10px' }} 
//           />
//           <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Tshwane University of Technology
//           </span>
//         </div>

//         <div>
//           <button 
//             style={{ 
//               backgroundColor: '#D50032', 
//               color: '#fff', 
//               padding: '10px 20px', 
//               borderRadius: '4px', 
//               border: 'none', 
//               cursor: 'pointer' 
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div style={{ display: 'flex', marginTop: '10px' }}> 
//         {/* Sidebar (Hidden or Shown) */}
//         <div 
//           style={{ 
//             width: sidebarOpen ? '250px' : '50px', 
//             backgroundColor: '#000', 
//             padding: '20px', 
//             minHeight: '100vh',
//             transition: 'width 0.3s ease-in-out',
//             position: 'relative'
//           }}
//         >
//           {/* Toggle Button (Always in the same position) */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             {sidebarOpen && <h2 style={{ color: '#FFD700' }}></h2>}
//             <BsThreeDots 
//               onClick={() => setSidebarOpen(!sidebarOpen)} 
//               style={{ color: '#FFD700', cursor: 'pointer', fontSize: '50px' }} 
//             />
//           </div>

//           {/* Sidebar Menu (Only visible when sidebar is open) */}
//           {sidebarOpen && (
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '15px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;

// import React, { useState, useEffect } from 'react'; 
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import AdminDashboard from './AdminDashboard';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsPage from './NotificationsPage';
// import EligibilityVerification from './EligibilityVerification';
// import LaptopInventory from './LaptopInventory';
// import { BsThreeDots } from 'react-icons/bs';
// import logo from "./logo.jpg";

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate(); // Initialize navigate
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }
//   }, []);

//   const sections = {
//     Dashboard: <ReportingAnalytics />,
//     Requests: <AdminDashboard />, 
//     VerifyStudent: <EligibilityVerification />,
//     Notifications: <NotificationsPage />,
//     History: <LaptopInventory />,
//     Settings: (
//       <div>
//         <h2 style={{ color: '#FFD700' }}>Settings</h2>
//         <p style={{ color: '#ffffff' }}>Adjust system preferences and configurations.</p>
//       </div>
//     ),
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/"); // Redirect to the home page after logout
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#003366' }}>
//       {/* Navbar */}
//       <div 
//         style={{ 
//           backgroundColor: '#000408', 
//           padding: '10px 20px', 
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center'
//         }}
//       >
//         {/* Logo and Text */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img 
//             src={logo} 
//             alt="logo" 
//             style={{ height: '50px', marginRight: '10px' }} 
//           />
//           <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Tshwane University of Technology
//           </span>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           {loggedInUser && (
//             <span style={{ color: '#fff', marginRight: '15px', fontWeight: 'bold' }}>
//               Welcome, {loggedInUser.name}
//             </span>
//           )}
//           <button 
//             onClick={handleLogout} // Add onClick handler for logout
//             style={{ 
//               backgroundColor: '#D50032', 
//               color: '#fff', 
//               padding: '10px 20px', 
//               borderRadius: '4px', 
//               border: 'none', 
//               cursor: 'pointer' 
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div style={{ display: 'flex', marginTop: '10px' }}> 
//         {/* Sidebar (Hidden or Shown) */}
//         <div 
//           style={{ 
//             width: sidebarOpen ? '250px' : '50px', 
//             backgroundColor: '#000', 
//             padding: '20px', 
//             minHeight: '100vh',
//             transition: 'width 0.3s ease-in-out',
//             position: 'relative'
//           }}
//         >
//           {/* Toggle Button (Always in the same position) */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             {sidebarOpen && <h2 style={{ color: '#FFD700' }}></h2>}
//             <BsThreeDots 
//               onClick={() => setSidebarOpen(!sidebarOpen)} 
//               style={{ color: '#FFD700', cursor: 'pointer', fontSize: '50px' }} 
//             />
//           </div>

//           {/* Sidebar Menu (Only visible when sidebar is open) */}
//           {sidebarOpen && (
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: '15px' }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       backgroundColor: activeSection === section ? '#FFD700' : '#D50032',
//                       color: activeSection === section ? '#000' : '#fff',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h1 style={{ textAlign: 'center', color: '#FFD700' }}>Welcome, Admin!</h1>
//           {sections[activeSection]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminDashboard from "./AdminDashboard";
// import ReportingAnalytics from "./ReportingAnalytics";
// import NotificationsPage from "./NotificationsPage";
// import EligibilityVerification from "./EligibilityVerification";
// import LaptopInventory from "./LaptopInventory";
// import { BsThreeDots } from "react-icons/bs";
// import logo from "./logo.jpg";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

// const AdminDashboardLandingPage = () => {
//   const [activeSection, setActiveSection] = useState("Dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setLoggedInUser(JSON.parse(user));
//     }
//   }, []);

//   const sections = {
//     Dashboard: { component: <ReportingAnalytics />, icon: "bi bi-house-door" },
//     Requests: { component: <AdminDashboard />, icon: "bi bi-list-check" },
//     VerifyStudent: { component: <EligibilityVerification />, icon: "bi bi-person-check" },
//     Notifications: { component: <NotificationsPage />, icon: "bi bi-bell" },
//     History: { component: <LaptopInventory />, icon: "bi bi-clock-history" },
//     Settings: {
//       component: (
//         <div>
//           <h2 style={{ color: "#FFD700" }}>Settings</h2>
//           <p style={{ color: "#ffffff" }}>Adjust system preferences and configurations.</p>
//         </div>
//       ),
//       icon: "bi bi-gear",
//     },
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#003366" }}>
//       {/* Navbar */}
//       <div
//         style={{
//           backgroundColor: "#000408",
//           padding: "10px 20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {/* Logo and Title */}
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
//           <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
//             Tshwane University of Technology
//           </span>
//         </div>

//         {/* User Info & Logout */}
//         <div style={{ display: "flex", alignItems: "center" }}>
//           {loggedInUser && (
//             <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
//               Welcome, {loggedInUser.name}
//             </span>
//           )}
//           <button
//             onClick={handleLogout}
//             style={{
//               backgroundColor: "#D50032",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Sidebar & Main Content */}
//       <div style={{ display: "flex", marginTop: "10px" }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: sidebarOpen ? "250px" : "50px",
//             backgroundColor: "#000",
//             padding: "20px",
//             minHeight: "100vh",
//             transition: "width 0.3s ease-in-out",
//             position: "relative",
//           }}
//         >
//           {/* Sidebar Toggle */}
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             {sidebarOpen && <h2 style={{ color: "#FFD700" }}></h2>}
//             <BsThreeDots
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               style={{ color: "#FFD700", cursor: "pointer", fontSize: "50px" }}
//             />
//           </div>

//           {/* Sidebar Menu */}
//           {sidebarOpen && (
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {Object.keys(sections).map((section) => (
//                 <li key={section} style={{ marginBottom: "15px" }}>
//                   <button
//                     onClick={() => setActiveSection(section)}
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       backgroundColor: activeSection === section ? "#FFD700" : "#D50032",
//                       color: activeSection === section ? "#000" : "#fff",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "flex-start",
//                       gap: "10px",
//                     }}
//                   >
//                     <i className={sections[section].icon} style={{ fontSize: "18px" }}></i>
//                     {section}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: "20px" }}>
//           <h1 style={{ textAlign: "center", color: "#FFD700" }}>Welcome, Admin!</h1>
//           {sections[activeSection].component}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLandingPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ReportingAnalytics from "./ReportingAnalytics";
import NotificationsPage from "./NotificationsPage";
import EligibilityVerification from "./EligibilityVerification";
import LaptopInventory from "./LaptopInventory";
import { BsThreeDots } from "react-icons/bs";
import logo from "./logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminDashboardLandingPage = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const sections = {
    Dashboard: { component: <ReportingAnalytics />, icon: "bi bi-house-door" },
    Requests: { component: <AdminDashboard />, icon: "bi bi-list-check" },
    VerifyStudent: { component: <EligibilityVerification />, icon: "bi bi-person-check" },
    Notifications: { component: <NotificationsPage />, icon: "bi bi-bell" },
    History: { component: <LaptopInventory />, icon: "bi bi-clock-history" },
    Settings: {
      component: (
        <div>
          <h2 style={{ color: "#FFD700" }}>Settings</h2>
          <p style={{ color: "#ffffff" }}>Adjust system preferences and configurations.</p>
        </div>
      ),
      icon: "bi bi-gear",
    },
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#003366", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#000408",
          padding: "10px 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "50px", marginRight: "10px" }} />
          <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
            Tshwane University of Technology
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {loggedInUser && (
            <span style={{ color: "#fff", marginRight: "15px", fontWeight: "bold" }}>
              Welcome, {loggedInUser.name}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#D50032",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "60px", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div
          style={{
            width: sidebarOpen ? "250px" : "50px",
            backgroundColor: "#000",
            padding: "20px",
            minHeight: "100vh",
            transition: "width 0.3s ease-in-out",
            position: "fixed",
            left: 0,
            top: "60px",
            bottom: 0,
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <BsThreeDots
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: "#FFD700", cursor: "pointer", fontSize: "50px" }}
            />
          </div>
          {sidebarOpen && (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {Object.keys(sections).map((section) => (
                <li key={section} style={{ marginBottom: "15px" }}>
                  <button
                    onClick={() => setActiveSection(section)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: activeSection === section ? "#FFD700" : "#D50032",
                      color: activeSection === section ? "#000" : "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <i className={sections[section].icon} style={{ fontSize: "18px" }}></i>
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content (Scrollable) */}
        <div style={{ flex: 1, padding: "20px", marginLeft: sidebarOpen ? "250px" : "50px", overflowY: "auto", maxHeight: "calc(100vh - 60px)" }}>
          <h1 style={{ textAlign: "center", color: "#FFD700" }}>Welcome, Admin!</h1>
          {sections[activeSection].component}
        </div>
      </div>
      <footer style={{ backgroundColor: "#000408", color: "#fff", textAlign: "center", padding: "20px", position: "fixed", bottom: 0, width: "100%", marginTop:"-50px" }}>
        &copy; {new Date().getFullYear()} Tshwane University of Technology. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AdminDashboardLandingPage;
