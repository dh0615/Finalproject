import React, { useState } from "react";
import styled from "styled-components";
import introduceinner from "../asset/img/data/introduceinner";

const Wrapper = styled.div`
  height: auto;
`;

const Info = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 6%;
`;

const Clone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
  border-bottom: 4px solid #3e64ad;
  
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 35px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 35px;
    font-weight: 500;
    color: #3e64ad;
    transition: all 0.3s ease;
  }
`;

const Content = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Introduce = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="introduce">
      <Wrapper>
        <Info>
          {introduceinner.map((item) => (
            <Clone key={item.id}>
              <h2 onClick={() => handleToggle(item.id)}>
                {item.title} <span>{openIndex === item.id ? "-" : "+"}</span>
              </h2>
              <Content isOpen={openIndex === item.id}>
                <p>{item.content}</p>
              </Content>
            </Clone>
          ))}
        </Info>
      </Wrapper>
    </div>
  );
};

export default Introduce;
