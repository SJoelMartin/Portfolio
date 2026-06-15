import About from "./components/About";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience"
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/user" element={<User/>}></Route>
    </Routes>
  );
}

export default App