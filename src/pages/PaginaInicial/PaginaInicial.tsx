import Formulario from "../../components/Formulario/Formulario"
import ListaParticipantes from "../../components/ListaParticipantes/ListaParticipantes"
import Rodape from "../../components/Rodape/Rodape"

const PaginaInicial = () => {
    return(
        <>
            <Formulario/>
            <ListaParticipantes/>
            <Rodape/>
        </>
    )
}

export default PaginaInicial;