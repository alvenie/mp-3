import styled from "styled-components"

const StyledH3 = styled.h3`
    font-size: calc(10px + 2vw);
    color: crimson;
    padding: .5vw;
`;

const Img = styled.img`
    width: 100%;
    height: 50%; /* Set a fixed height for all images */
    object-fit: cover; /* This will ensure the image covers the area without distortion */
    border-radius: 10px; /* adds rounded corners to images */
`;

const Interests = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2vw;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

const Section = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media screen and (max-width: 750px){
        margin-bottom: 2vw;
    }
`;

export default function MainInterests() {
    return (
        <Interests>
            <Section>
                <StyledH3>
                    Volleyball
                </StyledH3>

                <Img src={"/VOLLEYBAL.png"} alt={"Picture of me spiking!"}></Img>
            </Section>
            <Section>
                <StyledH3>
                    Pokemon
                </StyledH3>

                <Img src={"/psyduckk.png"} alt={"Picture of a psyduck illustration rare!"}></Img>
            </Section>
            <Section>
                <StyledH3>
                    Video Games
                </StyledH3>

                <Img src={"/minecraft.jpg"} alt={"Picture of Minecraft!"}></Img>
            </Section>
        </Interests>
    )
}