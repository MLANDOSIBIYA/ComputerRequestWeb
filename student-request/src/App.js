
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegisterPage from './RegisterPage';
// import LoginPage from './LoginPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/" element={<LoginPage />} /> {/* Default route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './pages/components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LaptopRequestForm from './pages/LaptopRequestForm';
import AdminDashboard from './pages/AdminDashboard';
import LaptopInventory from './pages/LaptopInventory';
import NotificationsPage from './pages/NotificationsPage';
import EligibilityVerification from './pages/EligibilityVerification';
import ReportingAnalytics from './pages/ReportingAnalytics';
import AccessibilityUsability from './pages/AccessibilityUsability';
import SupportAndFeedback from './pages/SupportAndFeedback';
import SecurityFeatures from './pages/SecurityFeatures';
import ExternalSystemIntegrationPage from './pages/ExternalSystemIntegrationPage';
import SustainabilityPage from './pages/SustainabilityPage ';
import FeedbackLoopPage from './pages/StudentSurveys';
import HomePage from './pages/HomePage ';
import AboutPage from './pages/components/AboutPage';
import AdminDashboardLandingPage from './pages/AdminDashboardLandingPage ';
import StudentNotificationsPage from './pages/StudentNotificationsPage';
import StudentLandingPage from './pages/StudentLandingPage';
import StatusPage from './pages/StatusPage';
import StudentSurveys from './pages/StudentSurveys';
import ImpactTracking from './pages/ImpactTracking';
import ResetPassword from './pages/ResetPassword';
import HelpSection from './pages/HelpSection';
import Layout from './pages/components/Layout';








function App() {
  return (
    <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
      <Routes>
      <Route path="/" element={<HomePage />} /> {/* Default route */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LaptopRequestForm" element={<LaptopRequestForm />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/LaptopInventory" element={<LaptopInventory />} />
        <Route path="/NotificationsPage" element={<NotificationsPage />} />
        <Route path="/EligibilityVerification" element={<EligibilityVerification />} />
        <Route path="/ReportingAnalytics" element={<ReportingAnalytics />} />
        <Route path="/AccessibilityUsability" element={<AccessibilityUsability />} />
        <Route path="/SupportAndFeedback" element={<SupportAndFeedback />} />
        <Route path="/SecurityFeatures" element={<SecurityFeatures />} />
        <Route path="/ExternalSystemIntegrationPage" element={<ExternalSystemIntegrationPage />} />
        <Route path="/SustainabilityPage" element={<SustainabilityPage />} />
        <Route path="/FeedbackLoopPage" element={<FeedbackLoopPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/AdminDashboardLandingPage" element={<AdminDashboardLandingPage />} />
        <Route path="/StudentNotificationsPage" element={<StudentNotificationsPage />} />
        <Route path="/StudentLandingPage" element={<StudentLandingPage />} />
        <Route path="/StatusPage" element={<StatusPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/StudentSurveys" element={<StudentSurveys />} />
        <Route path="/ImpactTracking" element={<ImpactTracking />} />
        <Route path="/HelpSection" element={<HelpSection />} />
        <Route path="/Layout" element={<Layout />} />
       
       
      </Routes>
      </main>
      <footer />
      </div>
    </Router>
  );
}

export default App;
