import "./Project.css";

export function Project() {
  return (
    <>
      <section className="projects">
        <PTitle />
        <PContainer />
      </section>
    </>
  );
}

function PTitle() {
  return (
    <div className="section-title">
      <h2>Our Projects</h2>
      <p>
        Here are some of the projects we've developed using modern web
        technologies and industry best practices.
      </p>
    </div>
  );
}

function PContainer() {
  return (
    <div className="project-container">
      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=1" alt="Project 1"></img>

        <div className="project-content">
          <h3>Library Management System</h3>

          <p>
            A full-stack MERN application for managing books, members, and issue
            records.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=2" alt="Project 2"></img>

        <div className="project-content">
          <h3>Student Management System</h3>

          <p>
            A Spring Boot application for managing student information, courses,
            and results.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=3" alt="Project 3"></img>

        <div className="project-content">
          <h3>E-Commerce Website</h3>

          <p>
            An online shopping platform with product listings, cart
            functionality, and secure checkout.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=4" alt="Project 4"></img>

        <div className="project-content">
          <h3>Portfolio Website</h3>

          <p>
            A responsive personal portfolio showcasing skills, certifications,
            and completed projects.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=5" alt="Project 5"></img>

        <div className="project-content">
          <h3>Hospital Management</h3>

          <p>
            Manage doctors, patients, appointments, and billing through a secure
            web application.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="https://picsum.photos/400/250?random=6" alt="Project 6"></img>

        <div className="project-content">
          <h3>Task Management App</h3>

          <p>
            Organize daily tasks, deadlines, and team collaboration with an
            intuitive interface.
          </p>

          <a href="#" className="project-btn">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
