import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Nav = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <LogoImg>
            <img className="" src={} alt=""/>
          </LogoImg>
          <ul>
            <li></li>
          </ul>
        </div>
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
