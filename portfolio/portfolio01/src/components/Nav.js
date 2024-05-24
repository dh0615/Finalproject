import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";

const Wrapper = styled.div``;

const Header = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: black;
  z-index: 1000;
  color: white;

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
      background-color: black;
      position: absolute;
      top: 60px;
      left: 0;
    }

    li {
      margin: 10px 0;
    }
  }
`;

const LogoImg = styled.div`
  width: 100px;
  height: 60px;
  background-color: green;
`;

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Wrapper>
        <Header toggleMenu={toggleMenu}>
          <LogoImg />
          <div
            className="toggle"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <FontAwesomeIcon icon={toggleMenu ? faTimes : faBars} />
          </div>
          <ul className="headerMenuList">
            <li>
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skill" spy={true} smooth={true} duration={500}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="clone" spy={true} smooth={true} duration={500}>
                Clone
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </Header>
      </Wrapper>
      <ProgressBar
        animated
        variant="info"
        now={scrollProgress}
        style={{ position: "fixed", top: "60px", left: 0, width: "100%" }}
      />
    </div>
  );
};

export default Nav;
