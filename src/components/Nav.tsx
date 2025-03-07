import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    background-color: cadetblue;

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding-left: 0;
        background-color: cadetblue;
    }
`;

const StyledLi = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    padding: 2vh 2vw;
    margin: 2.5vh 1vw;
    background-color: azure;

    @media screen and (max-width: 750px){
        font-size: calc(1px + 2vw);
        width: 90%;
        padding: 1vh .5vw;
        margin: 1vh .5vw;
        background-color: azure;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Nav(){
    return(
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to='/'>Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to='/education'>Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to='/experience'>Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to='/projects'>Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to='/skills'>Skills</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to='/interests'>Interests</StyledLink>
                </StyledLi>
            </StyledUl>
        </nav>
    );
}