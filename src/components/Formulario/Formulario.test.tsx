import { render, screen } from "@testing-library/react"
import Formulario from "./Formulario";


test('Espera-se encontrar o formulario', () => {
    render(<Formulario />)

    const input = screen.getByPlaceholderText('insira os nomes dos participantes');

    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument(); 
    expect(botao).toBeDisabled();
})