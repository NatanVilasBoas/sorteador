import { fireEvent, render, screen } from "@testing-library/react"
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


test('Espera-se encontrar o formulario', () => {
    render(<Formulario />)

    const input = screen.getByPlaceholderText('insira os nomes dos participantes');

    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument(); 
    expect(botao).toBeDisabled();
})

test('Adicionar participante caso exista texto', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>)

    const input = screen.getByPlaceholderText('insira os nomes dos participantes');

    const botao = screen.getByRole('button');

    fireEvent.change(input, {
        target:{
            value: "Ana"
        }
    })

    fireEvent.click(botao)

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
})