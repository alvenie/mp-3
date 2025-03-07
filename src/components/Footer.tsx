import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: cadetblue;
    padding: .5vw;
`;

export default function Footer() {
    return (
        <StyledFooter>
            All Rights Reserved by Alven Chen <Link to="/credits">Credits</Link>
        </StyledFooter>
    )
}