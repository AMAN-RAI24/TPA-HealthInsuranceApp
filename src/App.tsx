import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestRoute from "./Containers/Test";
import SignUpRoute from "./Containers/signup/SignUp";
import LoginScreen from "./Containers/Login/Login";
import { CreatePolicy } from "./Containers/CreatePolicy/CreatePolicy";
import ViewPolicy from "./Containers/ViewPolicy/ViewPolicy";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/Navbar/NavBar";
import About from "./Components/About/About";
import UserProfile from "./Components/UserProfile/UserProfile";
import ManagerDashboard from "./Containers/ManagerDashboard/ManagerDashboard";
import UserViewPolicy from "./Containers/UserPolicy/UserviewPolicy";
import { UserProfileTest } from "./Containers/UserProfileTest";
import HP from "./Containers/HomePage/HP";
import { SideBar } from "./Components/Handy Access Button/SIdeBar";
import { ViewPolicy1 } from "./Containers/View Policy/ViewPolicy";
import { Bot } from "./Components/ChatBot/Bot";
import SF from "./Components/Services/SF";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HP />} />
        <Route path="/test" element={<SF/>} />
        {/* <Route path="/view-policy/:id" element={<ViewPolicy />} /> */}
        <Route path="/bot" element={<Bot />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-policy" element={<CreatePolicy />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/userviewpolicy" element={<UserViewPolicy />} />
        <Route path="view-policy/:id" element={<ViewPolicy1 />} />
        <Route path="/hp-trial" element={<LandingPage />} />
        {/* <Route path="*" element={<h1>Page does'nt exist</h1>} /> */}
      </Routes>
      <SideBar />
    </div>
  );
}

export default App;
