import Footer from "../../Components/Footer"
import { renderContext } from "../test-utils"
import { screen } from "@testing-library/react"
import { useState } from "react";

describe ("<Footer /> Testes do Footer", () =>{
    
    test("Footer contém botão voltar ao topo ativo", ()=>{
        
        renderContext(
            <Footer/>
        )
        const buttonVoltarAoTopo = screen.getByTestId("footer-voltarAoTopo");
        expect(buttonVoltarAoTopo).not.toBeDisabled();
    })

        
})