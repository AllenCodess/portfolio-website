import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <div className="projects-container container" id="projects">
        <div className="projects-intro">
          <h4 className="pre-project-header purple">FEATURED PROJECTS</h4>
          <h2 className="projects-header">My Work</h2>
        </div>
        <div className="projects-grid">
          <div className="project">
            <img className="project-img" src="/huntleys.png" alt="huntleys project photo" />
            <div className="project-container">
              <h3 className="project-title">Huntley's Sauces</h3>
              <p className="project-type">Full-Stack E-Commerce Site</p>
              <p className="project-description">
                Production e-commerce site for Huntley's Inc. Handles real orders, payments, and
                inventory with an admin dashboard.
              </p>
              <ul className="project-list">
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> Paypal payments
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> Admin dashboard for
                  orders & inventory
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> REST API built with
                  Nodejs & Express
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> MongoDB database with
                  Mongoose
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> Deployed for production
                  use
                </li>
              </ul>
              <div className="btn-container">
                <button className="project-btn">
                  <a href="https://huntleysauce.com/" target="_blank" className="project-btn-link">
                    Live Site
                  </a>
                </button>
                <button className="project-btn">
                  <a
                    target="_blank"
                    href="https://github.com/AllenCodess/huntleys-website"
                    className="project-btn-link"
                  >
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="project">
            <img className="project-img" src="/jobtrack.png" alt="jobtrackhq project photo" />
            <div className="project-container">
              <h3 className="project-title">JobTrackHQ</h3>
              <p className="project-type">Full-Stack Web App</p>
              <p className="project-description">
                A full-featured job application tracker that helps users organize, manage, and track
                their job search in one place.
              </p>
              <ul className="project-list">
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> Secure authentiaction
                  (JWT)
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> Responsive UI built
                  with HTML, CSS, JAVASCRIPT{" "}
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> REST API built with
                  Nodejs & Express
                </li>
                <li className="project-list-item">
                  <FontAwesomeIcon icon={faSquareCheck} className="green" /> MongoDB database with
                  Mongoose
                </li>
              </ul>
              <div className="btn-container">
                <button className="project-btn">
                  <a href="https://jobtrackhq.com/" target="_blank" className="project-btn-link">
                    Live Site
                  </a>
                </button>
                <button className="project-btn">
                  <a
                    target="_blank"
                    href="https://github.com/AllenCodess/job-tracker/tree/main"
                    className="project-btn-link"
                  >
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
