import { realizaSorteio } from "./realizaSorteio"

describe('ao realizar um sorteio de amigo secreto', () => {

    test('Cada participante não deve sortear o próprio nome', () => {
        const participantes = [
            'test1',
            'test2',
            'test3',
            'test4',
            'test5'
        ]

        const sorteio = realizaSorteio(participantes)
        participantes.forEach( participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})