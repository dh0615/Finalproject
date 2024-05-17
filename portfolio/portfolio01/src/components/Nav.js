import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: grey;
`;

const Header = styled.div`
  width: 90vw;
  height: 60px;
  background: pink;
  margin: 0 auto;
`;

const LogoImg = styled.div`
  width: 100px;
  height: 60px;
  background: green;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #f00;
    gap: 20px;
  }
`;

const Nav = () => {
  return (
    <div>
      <Wrapper>
        <Header>
          <MenuBar>
            <LogoImg>
              <ul>
                <li style={{ listStyle: "none" }}>
                                               {" "}
                </li>
              </ul>
            </LogoImg>
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
