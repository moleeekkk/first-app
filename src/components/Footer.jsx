import { Component } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FContent />
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Project</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

class FContent extends Component {
  render() {
    let date = new Date();
    const year = date.getFullYear();

    return <p>&copy; {year} Maulik Dabhi. All Rights Reserved.</p>;
  }
}
