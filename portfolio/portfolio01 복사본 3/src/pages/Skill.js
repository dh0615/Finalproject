import React from "react";
import styled from "styled-components";
import skills from "../asset/img/data/skillsinner";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: #fff;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  padding: 50px 0 30px 0;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 50px;
  color: #3e64ad;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
`;
const SkillInner = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  width: calc(33% - 20px);
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
  img {
    width: 100%;
    max-width: 150px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 20px;
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
      max-width: 100px;
      height: 100px;
    }

    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const Skill = () => {
  return (
    <div id="skill">
      <Wrapper>
      <Title>02. skill</Title>
        <SkillContainer>
          {skills.map((skill) => (
            <SkillInner key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </SkillInner>
          ))}
        </SkillContainer>
      </Wrapper>
    </div>
  );
};

export default Skill;
