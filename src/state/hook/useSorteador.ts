import shuffle from "just-shuffle";
import { useListaParticipantes } from "./useListaParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { realizaSorteio } from "../helpers/realizaSorteio";

export const useSorteador = () => {

    const participantes = useListaParticipantes();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    return () => {
        const resultado = realizaSorteio(participantes);
        setResultado(resultado)

    }
}