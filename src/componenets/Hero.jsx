import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="hero-section-text">
          <div className="hero-header-container">
            <h1 className="hero-header">FULL-STACK</h1>
            <h1 className="hero-header-2">WEB DEVELOPER.</h1>
          </div>
          <h4 className="hero-heading">
            I build secure, scalable, and user friendly web applications for founders and small
            businesses.
          </h4>
          <p className="hero-description">
            With a background in cybersecurity, I bring a unique perspective to development.
            Building applications that are not only functional and beautiful, but also secure,
            reliable, and maintainable.
          </p>
          <a href="/WDPortfolioResume.pdf" download>
            <button className="hero-btn">
              Download Resume <FontAwesomeIcon icon={faDownload} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
