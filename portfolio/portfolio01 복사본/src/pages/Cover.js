import React from "react";
import styled from "styled-components";
import CoverImage01 from "../asset/img/cover01.PNG";
import CoverImage02 from "../asset/img/cover02.jpg";
import CoverImage03 from "../asset/img/cover03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background: #fffeee;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: "Cormorant", serif;
  font-weight: 900;
  text-align: center;
  font-size: 6vw;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: #3e64ad;

  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

const Desc = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  gap: 7%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 100px auto;
  }
`;

const CoverImg = styled.img`
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out;
  margin: 0 30px; 
  flex-shrink: 0; 
  &:first-child {
    max-width: 200px;
    transform: rotate(-12deg);
    z-index: 10;
  }
  &:nth-child(2) {
    max-width: 300px;
    transform: rotate(10deg);
  }
  &:nth-child(3) {
    max-width: 300px;
    transform: rotate(0deg);
  }

  @media (max-width: 900px) {
    max-width: calc(50% - 20px); 
    &:first-child {
    width: 20vw;
  }
  &:nth-child(2) {
    width: 30vw;
  }
  &:nth-child(3) {
    width: 30vw;
  }
  }

  @media (max-width: 768px) {
  &:first-child {
    width: 20vw;
  }
  &:nth-child(2) {
    width: 30vw;
  }
  &:nth-child(3) {
    width: 30vw;
  }
  }
`;

const Info = styled.div`
  width: 100%;
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
