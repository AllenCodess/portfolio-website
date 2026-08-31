import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container container">
        <div className="contact-left">
          <h4 className="contact-subheader">LET'S WORK TOGETHER</h4>
          <h1 className="contact-header">Have a project in mind?</h1>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <ul className="contact-list">
            <li className="list-items">
              <FontAwesomeIcon icon={faEnvelope} className="" />
            </li>
            <li className="list-items">
              <FontAwesomeIcon icon={faLinkedin} className="" />
            </li>
            <li className="list-items">
              <FontAwesomeIcon icon={faGithubSquare} className="" />
            </li>
          </ul>
        </div>
        <div className="contact-right"></div>
      </div>
    </>
  );
};

export default Contact;
