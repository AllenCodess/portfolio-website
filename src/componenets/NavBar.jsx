const NavBar = () => {
  return (
    <>
      <div className="navbar-container container">
        <div className="left-nav">
          <h2 className="nav-name">Allen Huntley</h2>
        </div>
        <div className="right-nav">
          <ul className="right-nav-list">
            <li className="right-nav-list-item">About</li>
            <li className="right-nav-list-item">Projects</li>
            <li className="right-nav-list-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="hero-section container">
        <div className="hero-section-text">
          <div className="hero-header-container">
            <h1 className="hero-header">FULL-STACK</h1>
            <h1 className="hero-header">WEB DEVELOPER.</h1>
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
          <button className="hero-btn">Download Resume</button>
        </div>
      </div>
      <div className="about-me-section container">
        <h1>About me</h1>
      </div>
    </>
  );
};

export default NavBar;
