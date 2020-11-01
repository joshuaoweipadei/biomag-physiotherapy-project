import React, { useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import '../styles/TopNavbar.css';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHome = () => scroll.scrollToTop();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav>
        <div className="top__nav">
          <div className="navbar">
            <div className="navbar__brand" onClick={toggleHome}>
              <h1>BioMAG</h1>
            </div>

            <Transition in={isOpen} timeout={300}>
              <div className="mobile__btn" onClick={toggle}>
                {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
              </div>
            </Transition>
            
            <ul className="nav__item">
            <li className="nav__link">
                <LinkScroll
                  className="nav__linkScroll"
                  to="home"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Home</LinkScroll>
              </li>
              <li className="nav__link">
                <LinkScroll
                  className="nav__linkScroll"
                  to="about"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >About</LinkScroll>
              </li>
              {/* <li className="nav__link">
                <LinkScroll
                  className="nav__linkScroll"
                  to="services"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Services</LinkScroll>
              </li> */}
              <li className="nav__link">
                <LinkScroll
                  className="nav__linkScroll"
                  to="product"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Products</LinkScroll>
              </li>
              <li className="nav__link">
                <LinkScroll
                  className="nav__linkScroll"
                  to="contact"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Contact Us</LinkScroll>
              </li>
            </ul>
          </div>
        </div>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="mobile"
          unmountOnExit
        >
          <div className="mobile__item">
            <div className="mobile__menu">
              <LinkScroll
                className="mobile__menuLink"
                onClick={toggle}
                to="home"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Home</LinkScroll>
              <LinkScroll
                className="mobile__menuLink"
                onClick={toggle}
                to="about"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >About</LinkScroll>
              {/* <LinkScroll
                className="mobile__menuLink"
                onClick={toggle}
                to="services"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Services</LinkScroll> */}
              <LinkScroll
                className="mobile__menuLink"
                onClick={toggle}
                to="product"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Products</LinkScroll>
              <LinkScroll
                className="mobile__menuLink"
                onClick={toggle}
                to="contact"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Contact Us</LinkScroll>
              {/* <LinkScroll to="discover" className="mobile__menuLink">Products</LinkScroll>
              <LinkScroll to="discover" className="mobile__menuLink">Feedback</LinkScroll>
              <LinkScroll to="discover" className="mobile__menuLink">Contact Us</LinkScroll> */}
            </div>
          </div>
        </CSSTransition>
      </nav>
    </>
  )
}

export default TopNavbar
