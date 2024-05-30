import React from "react";
import styled from "styled-components";
import "../App";
import CoverImage01 from "../asset/img/cover.jpg";
import CoverImage02 from "../asset/img/cover02.jpg";
import CoverImage03 from "../asset/img/cover03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background: #fffeee;
  margin: 60px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const Title = styled.div`
  font-family: "Cormorant", serif;
  font-weight: 900;
  text-align: center;
  font-size: 7vw;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: #3e64ad;
  padding-top: 4rem;
`;

const Desc = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
`;

const ImageContainer = styled.div`
  width: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CoverImg = styled.img`
  width: 100%;
  max-width: 200px; /* Set a max width for each image */
  height: auto;

  &:first-child {
    top: 60px;
  }
`;

const Info = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  transform: translateY(-50px);
  text-align: center;
`;

const Cover = () => {
  return (
    <Wrapper>
      <Title>my archive</Title>
      <Desc>
        <ImageContainer>
          <CoverImg src={CoverImage01} alt="Cover 1" />
          <CoverImg src={CoverImage02} alt="Cover 2" />
          <CoverImg src={CoverImage03} alt="Cover 3" />
        </ImageContainer>
        <Info>
          <p>
            Hi, I'm DaHyun, this is my portfolio with{" "}
            <span>ui / ux design</span> and <span>web publishing</span>
          </p>
          <p>scroll down</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </Info>
      </Desc>
    </Wrapper>
  );
};

export default Cover;
