import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

jest.mock('../../state/hook/useListaParticipantes', () => {
    return{
        useListaParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    
    test('deve ser renderizada sem nenhum elemento dentro', () => {

        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    })
})

describe('uma lista de participantes com elementos', () => {

    const participantes = ['Ana', 'Joao']
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada com elementos', () => {

        render(<RecoilRoot>
            <ListaParticipantes/>
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})