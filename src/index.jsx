import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthProvider from "./content/auth-context";
import { DarkModeProvider } from "./content/dark-mode";
const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <AuthProvider>
    <DarkModeProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/dentist/:id" element={<Detail />}/>
            </Route>
          </Routes>
        </BrowserRouter> 
    </DarkModeProvider>
  </AuthProvider>
   
);
