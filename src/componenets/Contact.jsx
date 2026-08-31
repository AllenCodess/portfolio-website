import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container container" id="contact">
        <div className="contact-left">
          <h4 className="contact-subheader purple">LET'S WORK TOGETHER</h4>
          <h2 className="contact-header">Have a project in mind?</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <ul className="contact-list">
            <li className="list-items">
              <a className="list-link" href="mailto:allenhuntley96@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="" />
              </a>
            </li>
            <li className="list-items">
              <a className="list-link" href="https://www.linkedin.com/in/allen-h-444795190/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </li>
            <li className="list-items">
              <a className="list-link" href="https://github.com/AllenCodess">
                <FontAwesomeIcon icon={faGithubSquare} className="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <input type="hidden" name="form-name" value="contact" />
          <form name="contact" method="POST">
            <div className="two-inputs">
              <label htmlFor="name">Your Name:</label>
              <input placeholder="Name" type="text" name="name" id="name" />
              <label htmlFor="email"></label>
              <input placeholder="Email" type="email" name="email" id="email" />
            </div>
            <label htmlFor="subject"></label>
            <input placeholder="Subject" type="text" name="subject" id="subject" />
            <label htmlFor="message">Message</label>
            <textarea placeholder="Message" name="message" id="message" />
            <button className="contact-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
