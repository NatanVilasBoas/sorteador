import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import styled from "styled-components";

const Rodape = () => {

    const Footer = styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 800px){
            flex-direction: column;
        }
    `

    const Btn = styled.button`
        width: 350px;
        height: 80px;
        font-size: 20px;
        box-shadow: 2px 2px 0px 1px #000000;
        border-radius: 45px;
        background-color: #FE652B;
        color: #FFF;
        cursor: pointer;

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:hover{
            background-color: #4B69FD;
        }

        @media(max-width: 800px){
            width: 220px;
            margin: 32px 0;
        }
    `

    const participantes = useListaParticipantes();

    const navigate = useNavigate();

    const iniciar = () => {
        navigate('/sorteio')
    }

    return (
        <Footer>
            <Btn disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</Btn>
            <img src="/assets/sacolas.png" alt="Sacolas de compras" />
        </Footer>
    )
}

export default Rodape;