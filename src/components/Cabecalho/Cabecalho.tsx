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
    background-image: url('/assets/logo.png');
    width: 351px;
    height: 117px;


    @media(max-width: 768px){
        background-image: url(/assets/logo-pequeno.png);
        background-repeat: no-repeat;
        width: 235px;
        height: 199px;
    }
`

const Cabecalho = () => {
    return (
        <Header>
            <ImagemLogo/>
            <ImagemParticipante src='/assets/participante.png' alt='participante com presente' />
        </Header>
    )
}

export default Cabecalho;