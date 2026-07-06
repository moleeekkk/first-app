import "./Navbar.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Navigation />
    </nav>
  );
}

function Logo() {
  return (
    <Fragment>
      <div className="logo">
        <Link to="/">MD</Link>
      </div>
    </Fragment>
  );
}

function Navigation() {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}
