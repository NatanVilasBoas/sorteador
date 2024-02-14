import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

jest.mock('../../state/hook/useListaParticipantes', () => {
    return{
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('../../state/hook/useSorteador', () => {
    return{
        useSorteador: () => mockSorteio
    }
})

jest.mock('react-router-dom', () => {
    return{
        useNavigate: () => mockNavegacao
    }
})

describe('quando a quantidade de participantes não é suficiente', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('o botão para iniciar deve estar desabilitado', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();
    })
})

describe('quando a quantidade de participantes é suficiente', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['teste1', 'teste2', 'teste3'])
    })

    test('o botão para iniciar deve estar habilitado', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');

        expect(botao).not.toBeDisabled();
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button');
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    })
})