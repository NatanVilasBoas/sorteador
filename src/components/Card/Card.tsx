import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
    background-color: #FFF9EB;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 64px 64px 0px 0px;
    padding: 80px;
    display: flex;
    flex: 1;
    margin-top: -32px;
    justify-content: center;
`

const Card = () => {
    return(
        <Container>
            <Outlet/>
        </Container>
    )
}

export default Card;