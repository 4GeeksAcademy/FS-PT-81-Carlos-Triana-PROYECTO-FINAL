import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/register.jsx";
import { Perfil } from "./pages/perfil.jsx";
import { Update } from "./pages/update.jsx";
import { UserHome } from "./pages/userHome.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div className="h-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Perfil />} path="/perfil" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" /> 
                        <Route element={<Update />} path="/update" /> 
                        <Route element={<UserHome />} path="/userHome" />         
                    </Routes>
                    <Footer className="" />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
