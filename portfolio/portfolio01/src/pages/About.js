import React from "react";
import styled from "styled-components";
import innerImg from "../asset/img/aboutimg.jpg";

const Wrapper = styled.div`
  height: 100vh;
  background: #eee;
`;
const Title = styled.div`
  text-align: center;
  padding: 100px 0 80px 0;
  font-size: 2.5rem;
  line-height: 1.5;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  border: 1px solid green;
`;
const SubTitle = styled.div`
  padding: 30px 0;
  font-size: 2.5rem;
  line-height: 1.5;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
const Img = styled.div`
  width: 500px;
  height: 350px;
  border: 1px solid #f00;
`;

const About = () => {
  return (
    <div id="about">
      <Wrapper>
        <Title>
          '도전을 두려워하지 않는 웹 퍼블리셔'
          <br />
          이다현입니다.
        </Title>
        <Info>
          <Img src={innerImg} alt="innerImg" />
          <Desc>
            <SubTitle>"You either win or learn"</SubTitle>
            <p>
              위 문장은 취업 준비 기간 동안 저에게 가장 큰 공감을 주고 힘을 준
              문장입니다. <br /> 저는 이 기간 동안 여러 경험을 하면서 좌절도
              하였지만 그 과정에서 많은 것을 배우게 되었습니다. <br /> 실패를
              더이상 두려워 하지 않고 스스로 성장할 수 있는 계기로 삼을 수 있게
              되었고,
              <br /> 이러한 마음가짐은 저를 더 강하고 단단하게 만들어
              주었습니다.
            </p>
          </Desc>
        </Info>
      </Wrapper>
    </div>
  );
};

export default About;
