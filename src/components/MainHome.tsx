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

const MainText = styled.p`
    font-size: calc(2px + 2vw);
    padding: 2vh 2vw;   
`;

const SubText = styled.p`
    font-size: calc(2px + 1vw);
    padding: 2vh 2vw;
    margin: 4vh 1vw;
`;

const Img = styled.img`
    max-width: 25%;
    border-radius: 10px;
`;

export default function MainHome() {
    return (
        <div>
            <StyledH3>
                Home
            </StyledH3>
            <MainContent>
                <MainText>
                    My name is Chonghao Chen I go by Alven Chen, and I am currently a junior studying Computer Science
                    at Boston University planning to graduate May 2026. I have a passion for learning, and I am seeking
                    opportunities to apply classroom knowledge to real-world projects and gain hands-on experience in the
                    tech industry.
                </MainText>
                <Img src={"public/Me.jpg"} alt="An image of me!" />
            </MainContent>
            <SubText>
                Welcome to my website! Here you will find my <strong><em><u>Educational</u></em></strong> and
                <strong><em><u>Projects</u></em></strong> history; as well as other information that might be of
                interest to you, like my <a href="https://www.linkedin.com/in/alven-chen-64b37a263/" target="_blank">Linkedin</a>
                or my <a href="https://github.com/alvenie" target="_blank">Github</a> profiles!
            </SubText>
        </div>
    )
}