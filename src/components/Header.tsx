import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: cadetblue;
    font-size: 1vw;

    @media screen and (max-width: 750px){
        align-items: center;
        background-color: cadetblue;
        color: beige;
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>
                Alven Chen
            </h1>
            <p>
                My Online Resume
            </p>
        </StyledHeader>
    );
}