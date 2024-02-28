import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layouts/Layout";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Meet from "./Components/Pages/Meet";
import JoinMeet from "./Components/Pages/JoinMeet";
import NewMeet from "./Components/Pages/NewMeet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/join-now" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Meet />} />
        <Route path="/joinmeet" element={<JoinMeet />} />
        <Route path="/newmeet" element={<NewMeet />} />
      </Routes>
    </>
  );
}

export default App;
