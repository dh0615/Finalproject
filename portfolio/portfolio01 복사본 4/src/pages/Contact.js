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
  font-size: 22px;
  background-color: #3e64ad;
  color: #fff;
`;

const ContactItem = styled.a`
  flex: 1;
  border: 1px solid #3e64ad;
  background-color: #fff;
  color: #3e64ad;
  transition: all 0.2s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    flex: 2;
    text-transform: lowercase;
  }

  &:hover::after {
    content: "${(props) => props.hoverText}";
  }

  &::after {
    content: "${(props) => props.defaultText}";
  }
`;

const ToTheTop = styled.div`
  flex: 0.5;
  background-color: #3e64ad;
  color: #fff;
  cursor: pointer;
  font-size: 1.5vw;
  text-align: center;
  line-height: 80px;
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
        <ContactItem
          href="tel:010-6778-8069"
          hoverText="010-6778-8069"
          defaultText="Phone"
        />
        <ContactItem
          href="https://github.com/dh0615"
          hoverText="https://github.com/dh0615"
          defaultText="Github"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ContactItem
          href="mailto:0615dh@gmail.com"
          hoverText="0615dh@gmail.com"
          defaultText="Mail"
        />
        <ToTheTop onClick={toTop}>⬆</ToTheTop>
      </Wrapper>
    </div>
  );
};

export default Contact;
