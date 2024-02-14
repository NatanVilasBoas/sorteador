import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 120px;

    @media(max-width: 850px){
        padding-top: 60px;
        flex-direction: column;
        align-items: center;
    }
`

const ImagemParticipante = styled.img`
    z-index: 1;
`

const ImagemLogo = styled.div`
    background-image: url('/assets/logo.png');
    width: 351px;
    height: 117px;


    @media(max-width: 850px){
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