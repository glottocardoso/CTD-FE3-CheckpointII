import Login from "../../Routes/Login"
import {render} from "../test-utils"
import { screen } from "@testing-library/react"

describe ("<Login /> Testes do Login", () =>{

    test("Renderizou corretamente", ()=>{

        render(
            <Login/>
        )
    })

    test("Renderizou corretamente e renderizou o componente filho <LoginForm />", ()=>{

        render(
            <Login/>
        );

        expect(screen.getByTestId("login-form").toBeInTheDocument());

    })
})