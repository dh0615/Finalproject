import React from "react";
import styled from "styled-components";
import skills from "./skillsinner";

const Wrapper = styled.div`
  padding: 20px;
  /* height: 100vh; */
  background: #ddd;
`;
const Title = styled.h1`
  text-align: center;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const SkillInner = styled.div`
  border: 1px solid #fff;
  border-radius: 20px;
  width: calc(30% - 20px);
  margin-bottom: 20px;
  padding: 15px 30px;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }
  h2 {
  }
  p {
    font-size: 1rem;
  }
`;

const Skill = () => {
  return (
    <div id="skill">
      <Wrapper>
        <Title>Skill</Title>
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
