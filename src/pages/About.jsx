import "./About.css";

function About() {
  return (
    <div>
      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700"
            alt="About Us"
          ></img>
        </div>

        <div className="about-content">
          <h2>About Us</h2>

          <p>
            We are passionate about developing modern, secure, and scalable web
            applications using Java and Spring Boot. Our goal is to deliver
            high-quality software while continuously learning and adopting the
            latest technologies.
          </p>

          <p>
            From RESTful APIs and database management to cloud deployment and
            DevOps practices, we focus on building solutions that are reliable,
            efficient, and easy to maintain.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>2+</h3>
              <span>Years Learning</span>
            </div>

            <div className="info-card">
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div className="info-card">
              <h3>100%</h3>
              <span>Dedication</span>
            </div>
          </div>

          <a href="#" className="about-btn">
            Know More
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
