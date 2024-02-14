import shuffle from "just-shuffle";
import { useListaParticipantes } from "./useListaParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";

export const useSorteador = () => {

    const participantes = useListaParticipantes();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    return () => {
        

        setResultado(resultado)

    }
}