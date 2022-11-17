import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/list_icon.svg";

function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };


  return (
    <>
    <section className={Styles.header}>  
      <div className="container">
        <div className={Styles.headerWrap}>
          <Link to="/home" className={Styles.logo}><img src={logo} alt="logo" /></Link>
          <div className={Styles.navWrap}>
            <nav>
              <NavLink to="/home" className={({ isActive }) => (isActive ? Styles.active : "")}>Home</NavLink>
              <NavLink to="/whatwedo" className={({ isActive }) => (isActive ? Styles.active : "")}>What We Do</NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? Styles.active : "")}>About us</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? Styles.active : "")}>Portfolio</NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? Styles.active : "")}>Testimonials</NavLink>
              <NavLink to="#" >Sign up</NavLink>
            </nav>
            <button  onClick={toggleMenu}><img src={menuIcon} alt="menu" /></button>
          </div>
        </div>
      </div>
    </section>
    {/* Popup menu */}
    <div className={openMenu ? Styles.popupMenuOpen : Styles.popupMenu}>
      <button className={Styles.close} onClick={toggleMenu}>
        close
      </button>
      <div className={Styles.popupWrap}>
        <div className={Styles.menu} onClick={toggleMenu}>
        <NavLink to="/home" className={({ isActive }) => (isActive ? Styles.active : "")}>Home</NavLink>
              <NavLink to="/whatwedo" className={({ isActive }) => (isActive ? Styles.active : "")}>What We Do</NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? Styles.active : "")}>About us</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? Styles.active : "")}>Portfolio</NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? Styles.active : "")}>Testimonials</NavLink>
              <NavLink to="#" >Sign up</NavLink>
        </div>
        <h3>Contact Us</h3>
        <div className={Styles.connectus}>
          <div className={Styles.connecttxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
            <a href="#">whatsapp/vinayak (sales)</a>
          </div>
        </div>
      </div>
    </div>
    {/* Popup menu */}
  </>
  );
}

export default Header;
