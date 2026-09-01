import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faComputer, faCode, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="about-me-section container" id="about">
        <div className="about-intro">
          <div className="about-left">
            <h2 className="about-header-one">About Me</h2>
            <h2 className="about-header">Background</h2>
            <div className="border"></div>
          </div>
          <div className="about-right">
            <p className="about-text">
              Flatiron School Software Engineering Bootcamp graduate (January 2026). I'm a full
              stack developer with a background in cybersecurity and IT support. I enjoy solving
              complex problems and building web applications that are fast, secure, and built to
              scale. I care about clean code, great user experience, and shipping real solutions
              that make an impact.
            </p>
          </div>
        </div>
        <div className="about-list">
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faShield} className="purple icons" />
            </div>
            <div className="about-list-right">
              <h4>Cybersecurity Background</h4>
              <p className="about-paragraph">
                Experienced in security testing, networking, and risk management with a strong focus
                on secure development practices.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faComputer} className="purple icons" />
            </div>
            <div className="about-list-right">
              <h4>Real-World Experience</h4>
              <p className="about-paragraph">
                From IT operations to offensive security, I've worked in fast-paced environments
                that sharpened my troubleshooting and problem-solving.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faCode} className="purple icons" />
            </div>
            <div className="about-list-right">
              <h4>Full-Stack Developer</h4>
              <p className="about-paragraph">
                I build responsive frontends with React and powerful backends with Node.js, Express,
                and MongoDB. End-to-End, production ready.
              </p>
            </div>
          </div>
          <div className="about-list-item">
            <div className="about-list-left">
              <FontAwesomeIcon icon={faPuzzlePiece} className="purple icons" />
            </div>
            <div className="about-list-right">
              <h4>Problem Solver</h4>
              <p className="about-paragraph">
                I break down complex systems and turn ideas into clean, efficient solutions that
                deliver real value to users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
