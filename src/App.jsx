import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Photoalbum from "./Components/Photoalbum/photoal1/Photoalbum"; 
import Photoalbum2 from "./Components/Photoalbum/Photoalbum2/Photoalbum2";
import Photoalbum3 from "./Components/Photoalbum/Photoalbum3/Photoalbum3";
import NavAbout from "./Components/NavAbout/NavAbout";
import NewFooter from "./Components/NewFooter/NewFooter";
import NewContact from "./Components/NewContactForm/NewContact";
import FAQ from "./Components/FAQ/FAQ";
import Shagun from "./Components/Shagun/Shagun";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Login from './Components/Login/Login';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Router>
        {/* Navbar and ScrollToTop stay outside Routes so they show on every page */}
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photogallery" element={<Photoalbum />} />
          <Route path="/photgallery2" element={<Photoalbum2 />} />
          <Route path="/photgallery3" element={<Photoalbum3 />} />
          <Route path="/navabout" element={<NavAbout />} />
          <Route path="/newcontact" element={<NewContact />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/shagun" element={<Shagun />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
        
        <NewFooter />
      </Router>
    </>
  );
}

export default App;