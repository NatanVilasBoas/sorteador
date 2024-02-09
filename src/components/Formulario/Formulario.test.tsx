import { act, fireEvent, render, screen } from "@testing-library/react"
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


describe('Comportamento do Formulario.tsx', () => {
    test('Espera-se encontrar o formulario', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
    
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
            target: {
                value: "Ana"
            }
        })
    
        fireEvent.click(botao)
    
        expect(input).toHaveFocus();
        expect(input).toHaveValue("");
    })
    
    test('mensagem de erro caso tente cadastrar um participante já cadastrado', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: "Ana"
            }
        })
    
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: "Ana"
            }
        })
    
        fireEvent.click(botao)
    
        const msgErro = screen.getByRole('alert');
    
        expect(msgErro.textContent).toBe('Nomes duplicados não são permitidos!');
    })
    
    
    test('mensagem de erro deve sumir após N segundos', () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: "Ana"
            }
        })
    
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: "Ana"
            }
        })
    
        fireEvent.click(botao)
    
        let msgErro = screen.queryByRole('alert');
        expect(msgErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        })
    
        msgErro = screen.queryByRole('alert');
        expect(msgErro).toBeNull();
    })
})

