import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-size: calc(10px + 2vw);
    text-align: center;
    color: crimson;
`;

const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
    max-width: 50%;
`;

const MainText = styled.p`
    font-size: calc(2px + 2vw);
    padding: 2vh 2vw;
`;

const SubText = styled.ul`
    font-size: calc(2px + 2vw);
    padding: 2vh 2vw;
    list-style: none;
    margin: 2.5vh 1vw;
`;

export default function MainEducation(){
    return(
        <div>
            <StyledH3>
                Boston University
            </StyledH3>
            <MainContent>
                <MainText>
                    Boston University is a leading private research institution with two primary campuses
                    in the heart of Boston and programs around the world
                </MainText>
                <Img src={"/bu.jpg"} alt="Picture of Boston University" />
            </MainContent>

            <SubText>
                <li>Current GPA: 3.65/4.00</li>
                <li>Major: Computer Science</li>
                <li>Degree: Bachelors</li>
                <li>Expected Graduation: May 2026</li>
            </SubText>
        </div>
    )
}