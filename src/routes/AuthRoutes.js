
import { React, useContext } from "react";
import {
    BrowserRouter as Router,
    Routes as RoutesR,
    Route,
    Navigate,
} from 'react-router-dom'

// Páginas da aplicação 
import SignIn from "../pages/Auth/SignIn";
import Signup from "../pages/Auth/Signup";
import FormAtivacao from "../pages/Auth/Signup/Form/FormAtivacao";


const AuthRoutes = () => {

    return (
        <Router>
            <RoutesR>
                <Route path='/cadastro' element={<Signup />}></Route>
                <Route path='/ativacao' element={<FormAtivacao />}></Route>
            </RoutesR>
        </Router>
    )
}

export default AuthRoutes;