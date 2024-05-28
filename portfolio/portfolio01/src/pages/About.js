// import React from "react";
// import styled from "styled-components";
// import innerImg from "../asset/img/aboutimg.jpg";

// const Wrapper = styled.div`
//   min-height: 100vh;
//   background: #eee;
  
// `;
// const Title = styled.div`
//   text-align: center;
//   padding: 100px 0 80px 0;
//   font-size: 2.5rem;
//   line-height: 1.5;
// `;
// const Info = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-content: center;
//   border: 1px solid green;
// `;
// const SubTitle = styled.div`
//   padding: 30px 0;
//   font-size: 2.5rem;
//   line-height: 1.5;
// `;
// const Desc = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
//   text-align: center;
// `;
// const Img = styled.img`
//   width: 500px;
//   height: 350px;
//   border: 1px solid #f00;
// `;

// const About = () => {
//   return (
//     <div id="about">
//       <Wrapper>
//         <Title>
//           '도전을 두려워하지 않는 웹 퍼블리셔'
//           <br />
//           이다현입니다.
//         </Title>
//         <Info>
//           <Img src={innerImg} alt="innerImg" />
//           <Desc>
//             <SubTitle>"You either win or learn"</SubTitle>
//             <p>
//               위 문장은 취업 준비 기간 동안 저에게 가장 큰 공감을 주고 힘을 준
//               문장입니다. <br /> 저는 이 기간 동안 여러 경험을 하면서 좌절도
//               하였지만 그 과정에서 많은 것을 배우게 되었습니다. <br /> 실패를
//               더이상 두려워 하지 않고 스스로 성장할 수 있는 계기로 삼을 수 있게
//               되었고,
//               <br /> 이러한 마음가짐은 저를 더 강하고 단단하게 만들어
//               주었습니다.
//             </p>
//           </Desc>
//         </Info>
//       </Wrapper>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import innerImg from "../asset/img/aboutimg.jpg";
import skills from "../asset/img/data/skillsinner";

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: #fff;
`;

const Title = styled.div`
  text-align: center;
  padding: 100px 0 50px 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: #063DCC;
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
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  border: 1px solid green;
  position: relative;
`;

const SubTitle = styled.div`
  padding: 30px 0;
  font-size: 2.5rem;
  line-height: 1.5;
`;

const Desc = styled.div`
  text-align: center;
  ${({ isMobile }) => !isMobile && "margin-left: 20px;"}
`;

const Img = styled.img`
  width: ${({ isMobile }) => (isMobile ? "80%" : "auto")};
  max-width: ${({ isMobile }) => (isMobile ? "none" : "500px")};
  height: auto;
  margin-bottom: ${({ isMobile }) => (isMobile ? "20px" : "0")};
  display: ${({ activeTab }) => (activeTab === "Introduce" ? "block" : "none")}; /* Introduce 탭일 때만 이미지 표시 */
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
  color: ${(props) => (props.active ? "blue" : "black")};
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
  width: calc(33% - 20px);
  padding: 15px 0;
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

const About = () => {
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
    <div id="about">
      <Wrapper>
        <Title>
          01. about
        </Title>
        <TabContainer>
          <TabButton
            onClick={() => handleTabClick("Introduce")}
            active={activeTab === "Introduce"}
          >
            Introduce
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Education")}
            active={activeTab === "Education"}
          >
            Education
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Certification")}
            active={activeTab === "Certification"}
          >
            Certification
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("Skill")}
            active={activeTab === "Skill"}
          >
            Skill
          </TabButton>
        </TabContainer>
        <Info isMobile={isMobile}>
          <Img src={innerImg} alt="innerImg" isMobile={isMobile} activeTab={activeTab} />
          <Desc isMobile={isMobile}>
            {activeTab === "Introduce" && (
              <>
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
              </>
            )}
            {activeTab === "Education" && (
              <>
                {/* Education content goes here */}
                <p>Education content goes here</p>
              </>
            )}
            {activeTab === "Certification" && (
              <>
                {/* Certification content goes here */}
                <p>Certification content goes here</p>
              </>
            )}
            {activeTab === "Skill" && (
              <>
                <SkillContainer>
          {skills.map((skill) => (
            <SkillInner key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </SkillInner>
          ))}
        </SkillContainer>
              </>
            )}
          </Desc>
        </Info>
      </Wrapper>
    </div>
  );
};

export default About;
