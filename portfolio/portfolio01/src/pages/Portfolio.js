import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { works } from "../asset/img/data/portfolioinner";

const Wrapper = styled.div`
  height: 100vh;
  background: #bbb;
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

const TabContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#3E64AD" : "black")};
`;

const Info = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  border: 1px solid green;
  position: relative;
`;

const Desc = styled.div`
  text-align: center;
  ${({ isMobile }) => !isMobile && "margin-left: 20px;"}
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Introduce");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="portfolio">
      <Wrapper>
        <Title>02. portfolio</Title>
        <TabContainer>
          <TabButton
            onClick={() => handleTabClick("Hover")}
            active={activeTab === "Hover"}
          >
            Hover
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Slide")}
            active={activeTab === "Slide"}
          >
            Slide
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Animation")}
            active={activeTab === "Animation"}
          >
            Animation
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Data")}
            active={activeTab === "Data"}
          >
            Data
          </TabButton>
        </TabContainer>
        <Info isMobile={isMobile}>
          <Desc isMobile={isMobile}>
            {activeTab === "Hover" && (
              <>
                <p>Hover content goes here</p>
              </>
            )}
            {activeTab === "Slide" && (
              <>
                <p>Slide content goes here</p>
              </>
            )}
            {activeTab === "Animation" && (
              <>
                <p>Animation content goes here</p>
              </>
            )}
            {activeTab === "Data" && (
              <>
                <p>Data content goes here</p>
              </>
            )}
          </Desc>
        </Info>
      </Wrapper>
    </div>
  );
};

export default Portfolio;
