import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: calc(10px + 2vw);
    color: crimson;
    padding: .5vw;
`;

const SkillSection = styled.div`
    font-size: calc(2px + 1vw);
    padding: .5vw;
    flex: 1;
    max-width: 30%;
`;

const StyledUl = styled.ul`
    list-style-type: square;
    padding-left: 1.5em;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 2vw;
`;

const Main = styled.div`
    width: 100%;
    padding: 1vw;
`;

export default function MainSkills() {
    return (
        <Main>
            <Skills>
                <SkillSection>
                    <StyledH3>
                        Skills
                    </StyledH3>
                    <StyledUl>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>C</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Kotlin</li>
                    </StyledUl>
                </SkillSection>
                <SkillSection>
                    <StyledH3>
                        Soft Skills
                    </StyledH3>
                    <StyledUl>
                        <li>Teamwork</li>
                        <li>Leadership</li>
                        <li>Communication</li>
                        <li>Adaptability</li>
                        <li>Critical-thinking</li>
                        <li>Problem-solving</li>
                        <li>Self-motivated</li>
                    </StyledUl>
                </SkillSection>
                <SkillSection>
                    <StyledH3>
                        Classes
                    </StyledH3>
                    <StyledUl>
                        <li>CS111: Intro Computer Science 1</li>
                        <li>CS112: Intro Computer Science 2</li>
                        <li>CS131: COMBIN STRUCS</li>
                        <li>CS132: GEOMETRIC ALGOR</li>
                        <li>CS210: COMP SYSTEMS</li>
                        <li>CS237: Probability in Computing</li>
                        <li>CS330: Analysis of Algorithms</li>
                        <li>CS460: INTRO DATABASES</li>
                        <li>CS320: Concepts Programming Languages</li>
                        <li>CS365: FOUND DATA SCI</li>
                        <li>CS411: Software Engineering</li>
                        <li>CS506: MOBILE APP DEVLPMENT</li>
                    </StyledUl>
                </SkillSection>
            </Skills>
        </Main>
    )
}