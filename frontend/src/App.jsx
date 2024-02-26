import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layouts/Layout";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/join-now" element={<Register />} />
        <Route path="/Register" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
