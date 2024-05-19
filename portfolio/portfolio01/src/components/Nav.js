
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons";

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: grey;
// `;

// const Header = styled.div`
//   width: 100%;
//   height: 60px;
//   background: pink;
//   margin: 0 auto;
  
// `;

// const LogoImg = styled.div`
//   width: 100px;
//   height: 60px;
//   background: green;
// `;

// const MenuBar = styled.div`
// width : 90%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0 auto;
//   .toggle{
//     display:block;
//   }
//   .headerMenuList {
//     display: ${(props) => (props.isToggled ? "flex" : "none")};
//     justify-content: space-around;
//     align-items: center;
//     border: 1px solid #f00;
//     gap: 20px;
//     flex-direction: column;
//     width: 100%;
//     background-color: black;
//   }
// `;

const Wrapper = styled.div``;
const Header = styled.div`max-width: 1280px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
background-color: black;

.logo {
  margin: 0 1rem;
  font-size: 2rem;
}

.headerMenuList{
  list-style: none;
  display: flex;
}

li {
  padding: 0 1rem;
}

.toggle {
  display: none;
  font-size: 1.5rem;
  padding: 1rem 1rem;
}


@media screen and (max-width: 768px) {
  flex-wrap: wrap;

  .headerMenuList {
    display: ${(props) => (props.toggleMenu ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: black;
  }

  .headerMenuList li {
    margin: 1rem 0;
    padding: 0;
  }

  .toggle {
    display: block;
  }

}
`;
const MenuBar = styled.div``;
const LogoImg = styled.div``;



const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState();

  return (
    <div>
      <Wrapper>
        <Header toggleMenu = {toggleMenu}>
          <MenuBar>
            <LogoImg></LogoImg>
            <div className="toggle" onClick={() => {setToggleMenu(!toggleMenu)}}>
              <FontAwesomeIcon icon = {!toggleMenu ? faBars : faX} />
            </div>
            <ul className="headerMenuList">
              <li>About</li>
              <li>Skill</li>
              <li>Portfolio</li>
              <li>Clone</li>
              <li>Contact</li>
            </ul>
          </MenuBar>
        </Header>
      </Wrapper>
      <ProgressBar
        striped
        variant="danger"
        /* now={(questionNo / QuestionData.length) * 100} */
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Nav;
