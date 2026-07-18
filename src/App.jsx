import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Services } from "./pages/Sevices";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import Login from "./pages/Login";
import { useState } from "react";
import Registration from "./pages/Registration";
// import Looping from "./pages/Looping";
import Effect_Hook from "./pages/Effect_Hook";

function App() {
  const [Username, setUsername] = useState("");
  const [Temp, setTemp] = useState("");

  return (
    <>
      <Effect_Hook />
      {/* <Looping /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <Login
              Temp={Temp}
              setTemp={setTemp}
              Username={Username}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
