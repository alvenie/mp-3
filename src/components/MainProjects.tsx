import styled from 'styled-components';
import Calculator from "./Calculator.tsx";

const MainHeading = styled.h2`
    padding: .5vw .5vw 0;
    font-size: calc(2px + 2vw);
    text-align: center;
    color: crimson;
`;

const SubTitle = styled.h3`
    font-size: calc(2px + 2vw);
    text-align: center;
    padding: .5vw .5vw;
`;

const SubDescription = styled.p`
    font-size: calc(2px + 1vw);
    padding: .5vw .5vw;
    text-align: center;
    width: 90%;
    margin: 0 auto;
`;

export default function MainProjects() {
    return (
        <div>
            <Calculator />
            <MainHeading>
                Projects
            </MainHeading>
            <SubTitle>
                NomNom: Restaurant Roulette App
            </SubTitle>
            <SubDescription>
                NomNom is an innovative Android application that helps users discover new
                restaurants in their area through a fun and interactive roulette-style
                selection process. The app combines location-based services, user authentication,
                and a sleek user interface to provide a unique dining experience. Check out
                <a href="https://github.com/alvenie/NomNom"> NomNom's GitHub Repository</a> for more information.
            </SubDescription>
        </div>
    )
}