import Hamburger from "hamburger-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="navbar-container container">
        <div className="left-nav">
          <h2 className="nav-name">Allen Huntley</h2>
        </div>
        <div className="right-nav">
          <div className="burger-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <ul className={`right-nav-list ${isOpen ? "open" : ""}`}>
            <li className="right-nav-list-item">
              <a href="#about">About</a>
            </li>
            <li className="right-nav-list-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="right-nav-list-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
