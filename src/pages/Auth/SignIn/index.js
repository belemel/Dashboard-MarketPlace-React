import React, { useEffect, useState, useRef, useContext } from "react";
import './styles.css'
import logo_principal from '../../../assets/img/logo_myhart.png'
import LoginForm from "./Form/LoginForm";
import PasswordForm from "./Form/PasswordForm";
import TokenForm from "./Form/TokenForm";
import { generateRandomKeyword, getCpfOrEmail, loginAccount, validateToken, getPerson } from "../Signup/utils/apiFunctions";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { PersonContext } from "../../../hooks/PersonContext";

const SignIn = () => {

    const [visibleError, setVisibleError] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [step, setStep] = useState(0)
    const [teclado, setTeclado] = useState([])
    const [tecladoLoading, setTecladoLoading] = useState(false)
    const [exibicao, setExibicao] = useState([])
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState('')

    const navigate = useNavigate();

    async function generatePassword() {
        setTecladoLoading(true)

        let data = await generateRandomKeyword();

        // Transform in keyboard
        let keyData = [];
        for (let i = 0; i < 5; i++) {
            let valor = data.data.result[i];
            keyData.push(valor);
        }

        // Store in a state
        setTeclado(keyData)
        setExibicao(JSON.stringify(keyData))

        console.log("")
        setTecladoLoading(false)
    }

    async function handleNextStep() {
        setLoading(true)
        if (email.length < 1) {
            setVisibleError(true)
            let err = "Digite um e-mail ou CPF"

            // Validations
            setErrMessage(err)

            console.log(errMessage)
            return 0;
        }

        try {
            let login = await getCpfOrEmail(email)
            if (login.data.message.original.error == "Usuario inexistente") {
                setVisibleError(true)
                let err = "Usuário não encontrado em nosso banco de dados"
                setErrMessage(err)

                return 0;
            }

            if (login.data.message.original.error == "Email nao ativado") {
                setVisibleError(true)
                let err = "A sua conta ainda não foi ativada, cheque o seu email para poder ativar"
                setErrMessage(err)

                return 0;
            }
        } catch (err) {
            message.error(err)
        }
        setLoading(false)
        generatePassword()
        setVisibleError(false)
        setErrMessage('')
        setStep(1)
    }

    function handlePreviousStep() {
        setStep(0)
        setEmail('')
        setVisibleError(false)
        setSenha('')
        setErrMessage('')
    }

    async function loginSubmit() {
        const data = {
            email: email,
            password: senha,
            keys: teclado
        }


        try {
            setLoading(true)

            let login = await loginAccount(data)

            if (login.data.error == true) {
                setVisibleError(true)
                let err = "Dados de acesso invalidos"
                setErrMessage(err)

                return 0;
            }

            if (senha.length < 6) {
                setVisibleError(true)
                let err = "A senha deve conter 6 digitos"
                setErrMessage(err)

                return 0;
            }

            setStep(2)
            setVisibleError(false)
            setErrMessage('')
            setLoading(false)
            setName(login.data.result.name)
            botaoTimer()
            message.success("Token enviado com sucesso!")
        } catch (err) {

            if (err.response.data.message == "The password field is required.") {
                setVisibleError(true)
                let erro = "A senha é obrigatória"
                setErrMessage(erro)
            }

            if (err.response.data.message == "These credentials do not match our records.") {
                setVisibleError(true)
                let erro = "Dados de acesso invalidos"
                setErrMessage(erro)
            }

            if (err.response.data.message == "Account blocked for too many attempts") {
                setVisibleError(true)
                let erro = "Conta bloqueada"
                setErrMessage(erro)
            }


            if (err.response.data.message == "Account not validated") {
                setVisibleError(true)
                let erro = "Sua conta ainda não foi ativada"
                setErrMessage(erro)
            }

            setLoading(false)
        }
    }

    async function onSubmit() {
        const data = {
            email: email,
            password: senha,
            keys: teclado,
            token: token
        }

        try {
            setLoading(true)

            let res = await validateToken(data)

            if (res.data.error == true) {
                setVisibleError(true)
                let erro = "Token invalido"
                setErrMessage(erro)
                setLoading(false)
                return 0;
            }

            if (toggle === true) {
                localStorage.setItem('email', JSON.stringify(email))
            }

            if (toggle === false) {
                localStorage.removeItem('email')
            }

            let user = res.data.token

            localStorage.setItem('tk-user', JSON.stringify(user))

            let person = await getPerson()

            console.log(person.data.result.nivel)

            setLoading(false)
            setErrMessage('')
            setVisibleError(false)

            if(person.data.result.nivel == 1){
                localStorage.setItem('role', 'user')
                navigate('/dashboard')
            }

            if(person.data.result.nivel == 20){
                localStorage.setItem('role', 'admin')
                navigate('/admin/dashboard')
            }

            if(person.data.result.nivel == 10){
                localStorage.setItem('role', 'financial')
            }


        } catch (err) {
            message.err("Token invalido")
        }
        setLoading(false)
    }

    function botaoTimer() {
        let i = 45;

        document.getElementById('reenviar').textContent = `REENVIAR TOKEN EM 00:${i}`;
        document.getElementById('reenviar').disabled = true;

        let interval = setInterval(function () {
            i--;

            if (i < 10) {
                let reenvio = `REENVIAR TOKEN EM 00:0${i}`
                document.getElementById('reenviar').textContent = reenvio;
            } else {
                let reenvio = `REENVIAR TOKEN EM 00:${i}`
                document.getElementById('reenviar').textContent = reenvio;
            }
        }, 1000);

        setTimeout(function () {
            clearInterval(interval)
            document.getElementById('reenviar').textContent = "REENVIAR TOKEN";
            document.getElementById('reenviar').disabled = false;
        }, 45000);
    }

    return (
        <div className="__signin_container">
            <div className="__signin_content">
                <div className="__signin_padding">
                    <div className="__signin_header">
                        <img src={logo_principal} alt="Logo principal MyHart" width="350px" />
                    </div>
                    <section>
                        <div className="__signin_content_form">
                            <form onSubmit={e => { e.preventDefault(); }}>
                                <div className="form_group_signin">
                                    <article>
                                        {step == 0 && (
                                            <LoginForm
                                                setEmail={setEmail}
                                                handleNextStep={handleNextStep}
                                                loading={loading}
                                                setLoading={setLoading}
                                                errMessage={errMessage}
                                                setErrMessage={setErrMessage}
                                                visibleError={visibleError}
                                                toggle={toggle}
                                                setToggle={setToggle}
                                            />
                                        )}
                                        {step == 1 && (
                                            <PasswordForm
                                                onSubmit={loginSubmit}
                                                senha={senha}
                                                setSenha={setSenha}
                                                setExibicao={setExibicao}
                                                exibicao={exibicao}
                                                teclado={teclado}
                                                loginSubmit={loginSubmit}
                                                handlePreviousStep={handlePreviousStep}
                                                loading={loading}
                                                setLoading={setLoading}
                                                tecladoLoading={tecladoLoading}
                                                setTecladoLoading={setTecladoLoading}
                                                errMessage={errMessage}
                                                visibleError={visibleError}
                                            />
                                        )}
                                        {step == 2 && (
                                            <TokenForm
                                                onSubmit={onSubmit}
                                                loginSubmit={loginSubmit}
                                                senha={senha}
                                                setSenha={setSenha}
                                                setExibicao={setExibicao}
                                                setToken={setToken}
                                                token={token}
                                                exibicao={exibicao}
                                                teclado={teclado}
                                                handlePreviousStep={handlePreviousStep}
                                                loading={loading}
                                                setLoading={setLoading}
                                                tecladoLoading={tecladoLoading}
                                                setTecladoLoading={setTecladoLoading}
                                                errMessage={errMessage}
                                                visibleError={visibleError}
                                                name={name}
                                                botaoTimer={botaoTimer}
                                            />
                                        )}
                                    </article>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SignIn;