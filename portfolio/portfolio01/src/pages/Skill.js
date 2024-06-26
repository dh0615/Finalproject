import React from "react";
import styled from "styled-components";
import skills from "../asset/img/data/skillsinner";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: #fff;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 80px;
`;
const SkillInner = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  width: calc(30% - 20px);
  padding: 15px 15px 0;
  margin-bottom: 20px;
  text-align: center;
  img {
    width: 100%;
    max-width: 250px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const Skill = () => {
  return (
    <>
      <Wrapper>
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
    </>
  );
};

export default Skill;
