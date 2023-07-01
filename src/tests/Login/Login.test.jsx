import Login from "../../Routes/Login"
import { renderContext } from "../test-utils"
import { screen } from "@testing-library/react"

describe ("<Login /> Testes do Login", () =>{

    test("Renderizou corretamente", ()=>{
        const contextoGlobal = { theme: "dark", data: [] }
        renderContext(
            <Login/>,
            contextoGlobal
        )
    })

    test("Renderizou corretamente e renderizou o componente filho <LoginForm />", ()=>{

        const contextoGlobal = { theme: "dark", data: [] }
        renderContext(
            <Login/>,
            contextoGlobal
        );

        expect(screen.getByTestId("form-login")).toBeInTheDocument();

    })

})