import React, { useState, useEffect } from "react";
import styled from "styled-components";
import innerImg from "../asset/img/aboutimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutinner from "../asset/img/data/aboutinner";
import {
  faCalendarAlt,
  faEnvelope,
  faMobileAlt,
  faUserCircle,
  faMusic,
  faFilm,
  faCamera,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  contents: faFilm,
  music: faMusic,
  travel: faGlobe,
  photo: faCamera,
};

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: #fff;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 50px;
  color: #3e64ad;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const Info = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SubTitle = styled.div`
  padding: 10px 0 50px 0;
  font-size: 2rem;
  line-height: 1.5;
  span {
    color: #3e64ad;
    font-weight: bold;
    &:last-child {
      border-bottom: 3px solid #3e64ad;
    }
  }
`;

const AboutInner = styled.div``

const Desc = styled.div`
  text-align: center;
  margin-left: 20px;
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

const AboutImg = styled.div`
@media (max-width: 1200px) {
  margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  width: auto;
  max-width: 450px;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
    max-width: none;
    margin-bottom: 20px;
  }
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  gap: 1.5vh;
  span {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
      gap: 20vw;
    }
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutDesc = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;



const Section = styled.div`
  flex: 1 1 50%;
  padding: 10px;
  margin-bottom: 20px;

  h1 {
    color: #3e64ad;
    border-bottom: 3px solid #3e64ad;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    flex: 1 1 100%;
  }
`;

const Item = styled.div`
  margin-bottom: 10px;
  p {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
`;

const InterestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 10%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InterestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin: 0;
  }
`;

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSection = (title) => {
    const isSkillSection = title.toLowerCase() === "skill";
  
    return (
      <Section key={title}>
        <h1>{title}</h1>
        <div style={{ 
          display: isSkillSection ? 'flex' : 'block', 
          flexWrap: isSkillSection ? 'wrap' : 'nowrap',
          gap: isSkillSection ? '20px' : '0',
          justifyContent: isSkillSection ? 'center' : 'flex-start'
        }}>
          {aboutinner
            .filter((item) => item.title === title.toLowerCase())
            .map((item) => (
              <Item key={item.id} style={{ 
                /* flex: isSkillSection ? '1 1 200px' : 'none',
                textAlign: isSkillSection ? 'center' : 'left' */
              }}>
                {item.img && <img src={item.img} alt={item.desc} style={{ width: "auto", height: "50px", marginBottom: '10px' }} />}
                <p>
                  {item.date && <strong>{item.date}</strong>}
                </p>
                <p>{item.desc}</p>
              </Item>
            ))}
        </div>
      </Section>
    );
  };
  

  const renderInterestSection = () => (
    <Section key="interest">
      <h1>INTEREST</h1>
      <InterestGrid>
        {aboutinner
          .filter((item) => item.title === "interest")
          .map((item) => (
            <InterestItem key={item.id}>
              <FontAwesomeIcon icon={iconMap[item.desc.toLowerCase()]} />
              <p>{item.desc.toUpperCase()}</p>
            </InterestItem>
          ))}
      </InterestGrid>
    </Section>
  );

  return (
    <div id="about">
      <Wrapper>
        <Title>about</Title>
        <Info isMobile={isMobile}>
          <AboutImg>
            <Img src={innerImg} alt="innerImg" isMobile={isMobile} />
            <PersonalInfo>
              <span>
                <FontAwesomeIcon icon={faUserCircle} />
                LEE DAHYUN
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                1998.06.15
              </span>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
                0615dh@gmail.com
              </span>
              <span>
                <FontAwesomeIcon icon={faMobileAlt} />
                010-6778-8069
              </span>
            </PersonalInfo>
          </AboutImg>

          <Desc isMobile={isMobile}>
            <IntroContainer>
              <SubTitle>
                흔들리지 않고 한걸음 더 나아가는 <span>용기</span>와 <br />{" "}
                <span>도전정신</span>을 가진 <span>이다현</span>입니다
              </SubTitle>
              <AboutInner>
                <AboutDesc isMobile={isMobile}>
                  {renderSection("education")}
                  {renderSection("skill")}
                  {renderSection("certification")}
                  {renderInterestSection()}
                </AboutDesc>
              </AboutInner>
            </IntroContainer>
          </Desc>
        </Info>
      </Wrapper>
    </div>
  );
};

export default About;
