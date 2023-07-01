import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "../content/auth-context"
import { DarkModeProvider } from "../content/dark-mode"
import Home from "../Routes/Home"
import Detail from "../Routes/Detail"
import Login from "../Routes/Login"
import App from "../App"


const renderWithContext = (ui, providerValue)=>{
    return render(
        <BrowserRouter>            
            <DarkModeProvider value={providerValue}>
                {ui}
            </DarkModeProvider>
        </BrowserRouter>
    )
}

//Only for testing individual routes as /dentist/:id
const renderWithRouter = (ui, {route = '/', path='/'}) => {
    window.history.pushState({}, 'Test page', route)

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route index path={path} element={ui}/>
            </Routes>
        </MemoryRouter>
    )
}

export * from "@testing-library/react"
export {renderWithContext as renderContext, renderWithRouter}  