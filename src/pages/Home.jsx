import "./Home.css";
import About from "./About";
import { Services } from "./Sevices";
import { Project } from "./Project";
import { Contact } from "./Contact";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1>Build Modern Web Applications with Spring Boot</h1>

          <p>
            Learn Java, Spring Boot, REST APIs, MySQL, Docker, and Cloud
            technologies by building real-world projects. Create fast, secure,
            and scalable applications with ease.
          </p>

          <div className="home-buttons">
            <a href="#" className="btn primary-btn">
              Get Started
            </a>
            <a href="#" className="btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Developer"
          ></img>
        </div>
      </section>
      <About />
      <Services />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
