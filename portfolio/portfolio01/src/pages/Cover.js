import React from "react";
import styled from "styled-components";
import "../App";
import coverImg from "../asset/img/me.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 90vh;
  margin: 0 auto;
  background: #ccc;
`;

const Desc = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: #000;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 600;
  span {
    font-family: "Lora", serif;
    font-size: 3rem;
    font-weight: 700;
  }
`;

const Img = styled.img``;

const Cover = () => {
  return (
    <Wrapper>
      <Title>
        <p>This is </p>
        <br />
        <p>who</p>
        <br />
        <span> ( I ) am</span>
      </Title>

      <Desc>
        <Img src={coverImg} alt="coverimg" />
        <p>여기에 설명을 추가할 수 있습니다.</p>
      </Desc>
    </Wrapper>
  );
};

export default Cover;
