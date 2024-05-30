import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: #fffeee;
`;

const Title = styled.div`
  text-align: center;
  padding: 50px 0 30px 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: #3e64ad;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const Info = styled.div``;
const CloneOne = styled.div``;
const CloneTwo = styled.div``;
const CloneThree = styled.div``;

const Clone = () => {
  return (
    <div id="clone">
      <Wrapper>
        <Title>03. clone</Title>
        <Info>
          <CloneOne></CloneOne>
          <CloneTwo></CloneTwo>
          <CloneThree></CloneThree>
        </Info>
      </Wrapper>
    </div>
  );
};

export default Clone;
