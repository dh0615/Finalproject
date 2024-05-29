import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useScroll } from "framer-motion";

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
    }
    li {
      margin: 10px 0;
    }
  }
`;

const LogoImg = styled(motion.div)`
  width: 100px;
  height: 60px;
  background-color: green;
`;

const navHeaderVariants = {
  top: { backgroundColor: "#fffeee" },
  scroll: { backgroundColor: "#063dcc" },
};
const navMenuListVariants = {
  top: { color: "#063dcc" },
  scroll: { color: "#fffeee" },
};

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const headerAnimation = useAnimation();
  const menuListAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 60) {
        headerAnimation.start("scroll");
        menuListAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
        menuListAnimation.start("top");
      }
    });
  }, [scrollY]);
  return (
    <Wrapper>
      <Header
        variants={navHeaderVariants}
        animate={headerAnimation}
        initial="top"
        toggleMenu={toggleMenu}
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
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="clone"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Clone
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
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
