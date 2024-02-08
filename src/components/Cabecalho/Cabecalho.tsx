import participanteImg from '../../assets/participante.png'
import logo from '../../assets/logo.png'
import logoPequeno from '../../assets/logo-pequeno.png'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #4B69FD;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

const ImagemParticipante = styled.img`
    position: relative;
    top: 1.9em;
`

const ImagemLogo = styled.div`
    background-image: url('${logo}');
    width: 351px;
    height: 117px;


    @media(max-width: 768px){
        background-image: url(${logoPequeno});
        background-repeat: no-repeat;
        width: 235px;
        height: 199px;
    }
`

const Cabecalho = () => {
    return (
        <Header>
            <ImagemLogo/>
            <ImagemParticipante src={participanteImg} alt='participante com presente' />
        </Header>
    )
}

export default Cabecalho;