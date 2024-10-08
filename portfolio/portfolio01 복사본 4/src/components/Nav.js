import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../asset/img/logo.png";
import { motion, useAnimation, useScroll } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ toggleMenu }) => (toggleMenu ? "hidden" : "auto")};
  }
`;

const Wrapper = styled.div``;

const Header = styled(motion.div)`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.isScrolled || props.toggleMenu ? "#3E64AD" : "#fffeee"};
  transition: background-color 0.3s;

  .toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .headerMenuList {
    list-style: none;
    display: flex;
  }

  li {
    height: 60px;
    line-height: 3.8;
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
    .toggle {
      display: block;
    }
    .headerMenuList {
      display: ${(props) => (props.toggleMenu ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 60px;
      left: 0;
      height: calc(100vh - 60px);
      background-color: ${(props) =>
        props.isScrolled ? "#3E64AD" : "#fffeee"};
      align-items: center;
      justify-content: center;
    }
    li {
      margin: 10px 0;
    }
  }
`;

const LogoImg = styled(motion.div)`
  width: 100px;
  height: 60px;
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
`;

const navHeaderVariants = {
  top: { backgroundColor: "#fffeee" },
  scroll: { backgroundColor: "#3E64AD" },
};
const navMenuListVariants = {
  top: { color: "#3E64AD" },
  scroll: { color: "#fffeee" },
};

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerAnimation = useAnimation();
  const menuListAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 60) {
        setIsScrolled(true);
        headerAnimation.start("scroll");
        menuListAnimation.start("scroll");
      } else {
        setIsScrolled(false);
        headerAnimation.start("top");
        menuListAnimation.start("top");
      }
    });
  }, [scrollY, headerAnimation, menuListAnimation]);

  return (
    <Wrapper>
      <GlobalStyle toggleMenu={toggleMenu} />
      <Header
        variants={navHeaderVariants}
        animate={headerAnimation}
        initial="top"
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
      >
        <LogoImg>
          <Link to="cover" />
        </LogoImg>
        <div
          className="toggle"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <FontAwesomeIcon icon={toggleMenu ? faTimes : faBars} />
        </div>
        <motion.ul
          className="headerMenuList"
          variants={navMenuListVariants}
          animate={menuListAnimation}
          initial="top"
        >
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setToggleMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setToggleMenu(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setToggleMenu(false)}
            >
              Contact
            </Link>
          </li>
        </motion.ul>
      </Header>
    </Wrapper>
  );
};

export default Nav;
