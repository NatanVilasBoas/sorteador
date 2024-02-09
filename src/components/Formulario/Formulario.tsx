import { useRef, useState } from "react";
import { useAddParticipante } from "../../state/hook/useAddParticipante";
import { useMensagemErro } from "../../state/hook/useMensagemErro";

const Formulario = () => {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionar = useAddParticipante();

    const mensagemErro = useMensagemErro();

    const adicionarParticipante = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        adicionar(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return(
        <form onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                value={nome}
                onChange={event => setNome(event.target.value)}
                type="text" 
                placeholder="insira os nomes dos participantes"/>
            <button disabled={!nome}>Adicionar</button>
            {mensagemErro && <p role="alert">{mensagemErro}</p>}
        </form>
    )
}

export default Formulario;