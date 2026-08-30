const NavBar = () => {
  return (
    <>
      <div className="navbar-container container">
        <div className="left-nav">
          <h2 className="nav-name">Allen Huntley</h2>
        </div>
        <div className="right-nav">
          <ul className="right-nav-list">
            <li className="right-nav-list-item">Home</li>
            <li className="right-nav-list-item">About</li>
            <li className="right-nav-list-item">Projects</li>
            <li className="right-nav-list-item">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
