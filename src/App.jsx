import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreelancerNavbar from "./FreelancerNavbar.jsx";
import { Services } from "./Services.jsx";
import { Jobs } from "./Jobs.jsx";
import { About } from "./About.jsx";
import { Support } from "./Support.jsx";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";
import { HomePage } from "./HomePage.jsx";
import ClientNavbar from "./ClientNavbar.jsx";
import { FreelancerChat } from "./FreelancerChat.jsx";
import HomeClient from "./ClientPages/HomeClient.jsx";
import PostJob from "./ClientPages/PostJob.jsx";
import Messages from "./ClientPages/Messages.jsx";
import Status from "./ClientPages/Status.jsx";
import ClientLayout from "./ClientLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        // Freelancer Dashboard Routes
        <Route element={<FreelancerNavbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/freelancerChat" element={<FreelancerChat />} />
        </Route>

        // Client Dashboard Routes
        <Route element={<ClientLayout />} >
          <Route path="/client-home" element={<HomeClient />} />
          <Route path="/post-jobs" element={<PostJob />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/status" element={<Status />} />
        </Route>

        // Auth Routes
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
