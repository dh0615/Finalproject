import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;
const Title = styled.div`
  flex: 5;
  font-size: 25px;
  background-color: #3e64ad;
  color: #fff;
`;
const ContactOne = styled.div`
  flex: 1;
  border: 1px solid #3e64ad;
  background-color: #fff;
  color: #3e64ad;
  transition: all 0.2s;
  &:hover {
    flex: 2;
  }
`;
const ContactTwo = styled.div`
  flex: 1;
  border: 1px solid #3e64ad;
  background-color: #fff;
  color: #3e64ad;
  transition: all 0.2s;
  &:hover {
    flex: 2;
  }
`;
const ContactThree = styled.div`
  flex: 1;
  border: 1px solid #3e64ad;
  background-color: #fff;
  color: #3e64ad;
  transition: all 0.2s;
  &:hover {
    flex: 2;
  }
`;
const ToTheTop = styled.div`
  flex: 0.5;
  background-color: #3e64ad;
  color: #fff;
  cursor: pointer;
`;

const Contact = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="contact">
      <Wrapper>
        <Title>get in touch ☺</Title>
        <ContactOne>Phone</ContactOne>
        <ContactTwo>Github</ContactTwo>
        <ContactThree>Mail</ContactThree>
        <ToTheTop onClick={toTop}>🡡</ToTheTop>
      </Wrapper>
    </div>
  );
};

export default Contact;
