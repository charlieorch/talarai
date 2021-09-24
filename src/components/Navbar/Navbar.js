import React from "react";
import data from "../data/metadata.json";
import { Nav, NavLink, MobileIcon, Bars, NavMenu } from "./NavBarElements";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const logo = data.home.logo;

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <div className="nav">
      <Nav>
        <NavLink>
          <img src={logo} alt="logo" onClick={scrollToTop}></img>
        </NavLink>
        <MobileIcon onClick={toggle}>
          <Bars />
        </MobileIcon>
        <NavMenu>
          <NavLink href="#about-us">About us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#functionality">Functionality</NavLink>
          <NavLink href="#contact-us">Contact Us</NavLink>
          <NavLink
            href="https://talarai.com/gallery/Talarai%20LLC%20SDVOSB%20Approval%20Letter.pdf"
            target="_blank"
          >
            Verification
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
