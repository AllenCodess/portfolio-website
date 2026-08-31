import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="about-me-section container">
        <div className="about-intro">
          <div className="about-left">
            <h2 className="about-header-one">About Me</h2>
            <h2 className="about-header">Background</h2>
            <div className="border"></div>
          </div>
          <div className="about-right">
            <p className="about-text">
              I'm a full stack developer with a background in cybersecurity and IT support. I enjoy
              solving complex problems and building web applications that are fast, secure, and
              built to scale. I care about clean code, great user experience, and shipping real
              solutions that make an impact.
            </p>
          </div>
        </div>
        <div className="about-list">
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faShield} className="purple" />
            </div>
            <div className="about-list-right">
              <h4>Cybersecurity Background</h4>
              <p className="about-paragraph">
                Expereinced in secuirty testing, networking, and risk management with a strong focus
                on secure development practices.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faShield} className="purple" />
            </div>
            <div className="about-list-right">
              <h4>Cybersecurity Background</h4>
              <p className="about-paragraph">
                Expereinced in secuirty testing, networking, and risk management with a strong focus
                on secure development practices.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faShield} className="purple" />
            </div>
            <div className="about-list-right">
              <h4>Cybersecurity Background</h4>
              <p className="about-paragraph">
                Expereinced in secuirty testing, networking, and risk management with a strong focus
                on secure development practices.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faShield} className="purple" />
            </div>
            <div className="about-list-right">
              <h4>Cybersecurity Background</h4>
              <p className="about-paragraph">
                Expereinced in secuirty testing, networking, and risk management with a strong focus
                on secure development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
