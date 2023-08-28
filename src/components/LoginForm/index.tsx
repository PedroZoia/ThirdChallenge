import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import Modal from "../../components/Modal";
import logo from "../../assets/img/logo-uolkut-simples.svg";
import axios from 'axios';
import {
    CreateAccountButton,
    CustomCheckboxInput,
    CustomCheckboxLabel,
    EmailInput,
    BirthDateInput,
    ProfessionInput,
    CountryInput,
    CityInput,
    RelationshipSelect,
    ErrorContainer,
    ErrorMessage,
    ForgotPasswordLink,
    ForgotPasswordLinkb,
    Form,
    LoginButton,
    LoginFormContainer,
    LoginTitle,
    LogoImage,
    PasswordInput,
    RememberMeContainer,
    RememberMeText,
    ReminderText,
} from './style';
import { response } from 'express';
import { error } from 'console';


interface User {
    email: string;
    password: string;
    birthDate?: string;
    profession?: string;
    country?: string;
    city?: string;
    relationship?: string;
}

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [profession, setProfession] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [relationship, setRelationship] = useState('Solteiro');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoginAttempted, setIsLoginAttempted] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { setUserIsLogged, modalIsVisible, setModalIsVisible, setUserInfo} = useContext(UserContext)!;
    const [isRegistrationForm, setIsRegistrationForm] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [recoveryEmail, setRecoveryEmail] = useState('');
    const [recoveryCode, setRecoveryCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isResetPasswordStep, setIsResetPasswordStep] = useState(false);



    useEffect(() => {
        setUserIsLogged(false);
    }, [setUserIsLogged]);


    // Handle the login process. Validates the email and password, displays errors if needed, and handles successful login. Is called when the form is submitted.
    const handleLogin = async () => {
        if (!email || !password || !isValidEmail(email)) {
            setIsLoginAttempted(true);
            setEmailError(email ? (isValidEmail(email) ? '' : 'Formato de e-mail inválido.') : 'Campo de e-mail não pode ser vazio.');
            setPasswordError(password ? '' : 'Campo de senha não pode ser vazio.');
            setLoginError('');
        } else {
            let profile = {
                email: email,
                password: password,
            }
    
            try {
                const response = await axios.post('http://localhost:3000/login', profile);
                console.log(response);
                
                // Armazene as informações do usuário no contexto após um login bem-sucedido
                setUserInfo(response.data.user);  
                
                setUserIsLogged(true);
                navigate('/profile');
            } catch (error) {
                console.log(error);
            }
        }
    };

    // Validates the email format. Returns true if the email is valid, otherwise false.
    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidBirthDate = (date: string) => {
        // Verifique se a data não está no futuro. Adicione mais verificações conforme necessário.
        return new Date(date) <= new Date();
    };

    const isNotEmpty = (value: string) => {
        return value.trim() !== '';
    };

    // Handles onBlur events for the email field. Sets the email error if the form is submitted and the email field is empty.
    const handleEmailBlur = () => {
        if (isFormSubmitted) {
            setEmailError(email ? '' : 'Campo de e-mail não pode ser vazio.');
        }
    };

    // Handles onBlur events for the password field. Sets the password error if the form is submitted and the password field is empty.
    const handlePasswordBlur = () => {
        if (isFormSubmitted) {
            setPasswordError(password ? '' : 'Campo de senha não pode ser vazio.');
        }
    };

    // Handles the "Remember Me" checkbox change event. Updates the rememberPassword state based on the checkbox status.
    const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(e.target.checked);
    };

    // Handles form submission. Prevents default form submission and calls handleLoginOrRegister.
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFormSubmitted(true);
    };

    const navigate = useNavigate();

    // Navigates to the create profile page.
    const handleCreateProfile = () => {
        setIsRegistrationForm(true);
    };

    // Toggles modal visibility.
    const handleModal = () => {
        setIsForgotPassword(true);
    };

    const handleBackToLogin = () => {
        setIsForgotPassword(false);
        setIsRegistrationForm(false);
        setIsResetPasswordStep(false); 
    };

    const handleRegistration = async () => {
        console.log("Botão 'Criar Conta' foi clicado!");

        if (!isValidEmail(email)) {
            console.log("Falha na validação do email");
            setRegistrationError('Formato de e-mail inválido.');
            return;
        }
    
        if (!isValidBirthDate(birthDate)) {
            console.log("Falha na validação Data nascimento");
            setRegistrationError('Data de nascimento inválida.');
            return;
        }
    
        if (![password, profession, country, city, relationship].every(isNotEmpty)) {
            console.log("Falha na validação de algum requisito");
            setRegistrationError('Todos os campos são obrigatórios para o registro.');
            return;
        }
    
        let user = {
            email: email,
            password: password,
            birthDate: birthDate,
            profession: profession,
            country: country,
            city: city,
            relationship: relationship
        }
    
        console.log(user)
    
        const response = await axios.post('http://localhost:3000/register', user).then((response) => {
            console.log(response)
            let data = response.data;
    
            setIsRegistrationForm(false); 
            navigate('/');
    
        }).catch((error) => {
            console.log(error)
        });
    
        console.log(response);
    }

    const handleSendCode = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsResetPasswordStep(true);
    };

    return (
        <LoginFormContainer>
    <LogoImage src={logo} alt="Logo" />

    {isResetPasswordStep ? (
        <>
            <LoginTitle>Nova Senha</LoginTitle>
            <Form onSubmit={handleSubmit}> {}
                <EmailInput
                    id="recoveryCode"
                    type="text"
                    value={recoveryCode}
                    onChange={(e) => setRecoveryCode(e.target.value)}
                    placeholder="Informe o código"
                />
                <PasswordInput
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Nova senha"
                />
                <PasswordInput
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmar a senha"
                />
                <LoginButton type="submit">Salvar</LoginButton>
            </Form>
            <ReminderText>
            Lembrou sua senha?
            </ReminderText>
            <ForgotPasswordLinkb onClick={handleBackToLogin} className="credentials-button">
                Entrar com as credenciais
            </ForgotPasswordLinkb>
        </>
    ) : isForgotPassword ? (
        <>
            <LoginTitle>Recupere sua Senha</LoginTitle>
            <Form onSubmit={handleSendCode}>
                <EmailInput
                    id="recoveryEmail"
                    type="text"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    placeholder="E-mail Cadastrado"
                />
                <LoginButton type="submit">Enviar código</LoginButton>
            </Form>
            <ReminderText>
            Lembrou sua senha?
            </ReminderText>
            <ForgotPasswordLinkb onClick={handleBackToLogin} className="credentials-button">
                Entrar com as credenciais
            </ForgotPasswordLinkb>
        </>
    ) : (
        <>
            <LoginTitle>{isRegistrationForm ? 'Cadastre-se no UOLkut' : 'Acesse o UOLkut'}</LoginTitle>
            <Form onSubmit={handleSubmit}>
                <EmailInput
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="E-mail"
                />
                {isLoginAttempted && emailError && (
                    <ErrorContainer>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </ErrorContainer>
                )}
                <PasswordInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    placeholder="Senha"
                />
                {isLoginAttempted && passwordError && (
                    <ErrorContainer>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </ErrorContainer>
                )}
                {isRegistrationForm ? (
                    <>
                        <div className="inputRow">
                            <BirthDateInput
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                placeholder="Data de Nascimento"
                            />
                            <ProfessionInput
                                type="text"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                placeholder="Profissão"
                            />
                        </div>
                        <div className="inputRow">
                            <CountryInput
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="País"
                            />
                            <CityInput
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Cidade"
                            />
                        </div>
                        <RelationshipSelect
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                        >
                            <option value="Solteiro">Solteiro</option>
                            <option value="Casado">Casado</option>
                            <option value="Divorciado">Divorciado</option>
                            <option value="Namorando">Namorando</option>
                            <option value="Preocupado">Preocupado</option>
                        </RelationshipSelect>
                        {isLoginAttempted && registrationError && (
                            <ErrorContainer>
                                <ErrorMessage>{registrationError}</ErrorMessage>
                            </ErrorContainer>
                        )}
                        <LoginButton type="submit" onClick={handleRegistration}>Criar Conta</LoginButton>
                    </>
                ) : (
                    <>
                        {isLoginAttempted && loginError && (
                            <ErrorContainer>
                                <ErrorMessage>{loginError}</ErrorMessage>
                            </ErrorContainer>
                        )}
                        <RememberMeContainer>
                            <CustomCheckboxInput
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={handleRememberMeChange}
                            />
                            <CustomCheckboxLabel htmlFor="rememberMe" />
                            <label htmlFor="rememberMe">
                                <RememberMeText>Lembrar minha senha</RememberMeText>
                            </label>
                        </RememberMeContainer>

                        <LoginButton type="submit" onClick={handleLogin}>Entrar na conta</LoginButton>
                        <CreateAccountButton type="button" onClick={handleCreateProfile}>
                            Criar uma conta
                        </CreateAccountButton>
                        <ForgotPasswordLink title="Esqueci a minha senha" onClick={handleModal}>
                            Esqueci a minha senha
                        </ForgotPasswordLink>
                    </>
                )}
            </Form>
        </>
    )}
    {modalIsVisible && <Modal imageLogo={''} text='Acesse seu e-mail e verifique suas informações.' buttonContent='Retornar à página' buttonLink="/" />}
</LoginFormContainer>
    );
}

export default LoginForm;