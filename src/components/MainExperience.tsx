import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-size: calc(10px + 2vw);
    color: crimson;
    padding: .5vw;
    text-align: center;
`;

const SecondExperience = styled.p`
    font-size: calc(10px + 1.5vw);
    color: crimson;
    padding: .5vw;
    text-align: center;
`;

const StyledText = styled.ul`
    font-size: calc(2px + 1.5vw);
    padding: 0 2vw;
`;

const StyledH5 = styled.h5`
    font-size: calc(2px + 1vw);
    text-align: center;
`;

export default function MainExperience() {
    return(
        <div>
            <StyledH3>
                Quincy College | IT Intern
            </StyledH3>
            <StyledH5>
                June 2022 - August 2022
            </StyledH5>
            <StyledText>
                <li>
                    Demonstrated technical proficiency by assisting in the repair and installation of
                    desktop systems and printers, enhancing the college's IT infrastructure.
                </li>
                <li>
                    Spearheaded
                    a large-scale deployment project, successfully setting up and configuring over 100
                    desktop systems in preparation for the fall semester, ensuring a smooth start to
                    the academic year.
                </li>
                <li>
                    Developed hands-on experience in troubleshooting hardware and
                    software issues, contributing to the efficient operation of the college's IT resources.
                </li>
                <li>
                    Collaborated effectively with the IT team to meet project deadlines and maintain high
                    standards of technical support for faculty and students.
                </li>
            </StyledText>

            <SecondExperience>
                Seidenberg Summer Scholars | Game Development
            </SecondExperience>
            <StyledH5>
                June 2021 - August 2021
            </StyledH5>

            <StyledText>
                <li>
                    Introduction to game development using the Unity engine offered by Pace University
                </li>
                <li>
                    Incorporated techniques such as sprites, models, collision, physics, lighting, and audio to
                    design and publish an endless point-accumulating game and a platformer with multiple stages
                    and levels on Itch.io
                </li>
                <li>
                    Achieved over 100 views across all published games on Itch.io.
                </li>
            </StyledText>
        </div>
    )
}