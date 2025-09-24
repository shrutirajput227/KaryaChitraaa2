import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar.jsx";
import {Services} from "./Services.jsx";
import {Jobs} from "./Jobs.jsx";
import {About} from "./About.jsx";
import {Support} from "./Support.jsx";
import {Login} from "./Login.jsx";
import {Register} from "./Register.jsx";
import {HomePage} from "./HomePage.jsx";
import { Dashboard } from "./Dashboard.jsx";
import { FreelancerChat } from "./FreelancerChat.jsx";

function App() {  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ClientDashboard" element={<Dashboard />} />
        <Route path="/freelancerChat" element={<FreelancerChat />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
