import Navbar from "../../Components/Navbar"
import { renderContext } from "../test-utils"
import { screen,fireEvent } from "@testing-library/react"

describe ("<Navbar /> Testes da Navbar", () =>{

    test("Botão de troca de modo Dark começou em light-mode", ()=>{
        
        renderContext(<Navbar/>)
        const button = screen.getByTestId("button-darkMode");
        expect(button).toHaveTextContent("🌙")
       
    })

    test("Botão detroca de modo Dark mudou para dark-mode", ()=>{
        
        renderContext(<Navbar/>)
        const button = screen.getByTestId("button-darkMode");
        fireEvent.click(button)
        expect(button).toHaveTextContent("☀")
       
    })

        
})

