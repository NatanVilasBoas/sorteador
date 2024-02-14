import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Card from "../../components/Card/Card";
import styles from './Sorteio.module.css';

const Sorteio = () => {

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const participantes = useListaParticipantes();
    const resultado = useResultadoSorteio();

    const sortear = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return(
        <Card>
        <section className={styles.sorteio}>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione o Participante</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button className={styles.botao_sortear}>Sortear</button>
            </form>
            {amigoSecreto && <p className={styles.resultado} role="alert">{amigoSecreto}</p>}
            <footer className={styles.sorteio}>
                <img src="/assets/aviao.png" className={styles.aviao} alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>
    )
}

export default Sorteio;