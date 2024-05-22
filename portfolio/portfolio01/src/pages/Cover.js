import React from "react";
import styled from "styled-components";
import "../App";
import coverImg from "../asset/img/krtr.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  background: #ccc;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  max-width: 50%;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  position: relative;
  z-index: 1;

  span {
    font-family: "Prata", serif;
    font-size: 4rem;
    font-weight: normal;
    letter-spacing: 2px;
    border-bottom: 2px solid #f00;
  }
  p:nth-of-type(2) {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    span {
      font-size: 3rem;
    }
    p:nth-of-type(2) {
      font-size: 0.8rem;
    }
  }
`;

const Desc = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin-top: 20px;
  text-align: center;
  max-width: 50%;
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    @media (max-width: 768px) {
      position: absolute;
      left: 0;
      width: 100%;
      height: 50vh;
    }
  }
  p {
    width: 100%;
    max-width: 500px;
    height: auto;
    border: 1px solid #f00;
    margin: 10px auto;
  }
  @media (max-width: 768px) {
    p {
      max-width: 300px;
      position: absolute;
      bottom: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
      gap: 50px;
      margin: 20px 0;
    }
  }
  .descInner {
  }
`;

const Cover = () => {
  return (
    <Wrapper>
      <Title>
        <p>Hello, I'm</p>
        <span>Lee DaHyun</span>
        <p>
          a passionate and ambitious <br /> Web Publisher.
        </p>
      </Title>

      <Desc>
        <img src={coverImg} alt="coverimg" />
        <div className="descInner">
          <p>설명..</p>
          <p>scroll down</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </Desc>
    </Wrapper>
  );
};

export default Cover;
