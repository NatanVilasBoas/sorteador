import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import PaginaInicial from "./PaginaInicial"

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return{
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina inicial', () => {
    test('deve ser renderizado corretamente', () => {
        const {container} = render(<RecoilRoot>
            <PaginaInicial />
        </RecoilRoot>)

        expect(container).toMatchSnapshot();
    })
})