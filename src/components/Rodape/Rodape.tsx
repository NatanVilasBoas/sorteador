import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

const Rodape = () => {

    const participantes = useListaParticipantes();

    const navigate = useNavigate();

    const iniciar = () => {
        navigate('/sorteio')
    }

    return(
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</button>
        </footer>
    )
}

export default Rodape;