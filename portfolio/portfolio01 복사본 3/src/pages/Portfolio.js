import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { portfolioinnerproject } from "../asset/img/data/portfolioinnerproject";
import { portfolioinnerdesign } from "../asset/img/data/portfolioinnerdesign";
import PortfolioModal from "../components/PortfolioModal";

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: #fff;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 50px;
  color: #3e64ad;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const Info = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
`;

const Desc = styled.div`
  text-align: center;
  ${({ isMobile }) => !isMobile && "margin-left: 20px;"}
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
  border-bottom: ${(props) => (props.active ? "1px solid #3E64AD" : "none")};
`;

const DesignPortfolioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  margin: 50px 0;
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
`;

const ProjectPortfolioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  margin: 50px 0;
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
`;

const DesignPortfolioInner = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  width: calc(50% - 20px);
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 280px;
    object-fit: contain;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #3e64ad;
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 1rem;
    font-family: "Nanum Gothic", sans-serif;
  }

  @media (max-width: 768px) {
    width: calc(52% - 20px);
    img {
      height: 150px;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const ProjectPortfolioInner = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  width: calc(50% - 20px);
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 310px;
    object-fit: cover;
    margin-bottom: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: transform 0.3s ease;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #3e64ad;
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 1rem;
    font-family: "Nanum Gothic", sans-serif;
  }

  @media (max-width: 768px) {
    width: calc(52% - 20px);
    img {
      height: 150px;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Design");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="portfolio">
      <Wrapper>
        <Title>Portfolio</Title>
        <TabContainer>
          <TabButton
            onClick={() => handleTabClick("Design")}
            active={activeTab === "Design"}
          >
            Design
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Project")}
            active={activeTab === "Project"}
          >
            Project
          </TabButton>
        </TabContainer>
        <Info isMobile={isMobile}>
          <Desc isMobile={isMobile}>
            {activeTab === "Design" && (
              <DesignPortfolioContainer>
                {portfolioinnerdesign.map((work) => (
                  <DesignPortfolioInner key={work.id} onClick={() => handleProjectClick(work)}>
                    <img src={work.img} alt={work.title} />
                    <h2>{work.title}</h2>
                    <p>{work.desc}</p>
                  </DesignPortfolioInner>
                ))}
              </DesignPortfolioContainer>
            )}
            {activeTab === "Project" && (
              <ProjectPortfolioContainer>
                {portfolioinnerproject.map((work) => (
                  <ProjectPortfolioInner key={work.id} onClick={() => handleProjectClick(work)}>
                    <img src={work.img} alt={work.title} />
                    <h2>{work.title}</h2>
                    <p>{work.desc}</p>
                  </ProjectPortfolioInner>
                ))}
              </ProjectPortfolioContainer>
            )}
          </Desc>
        </Info>
      </Wrapper>
      <PortfolioModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
};

export default Portfolio;
