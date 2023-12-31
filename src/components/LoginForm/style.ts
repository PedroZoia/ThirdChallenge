import styled from "styled-components";

const CreateAccountButton = styled.button`
    background-color: var(--bg-text);
    border: none;
    border-radius: 0.5rem; 
    color: var(--brand-color);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 500;
    height: 3.1875rem; 
    line-height: normal;
    margin-top: 1.25rem; 
    padding: 0.625rem 1.25rem; 
    width: 100%;
`;

const CustomCheckboxContainer = styled.div`
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    margin-top: 1.25rem; 
    user-select: none;
`;

const CustomCheckboxInput = styled.input.attrs({ type: "checkbox" })`
    height: 0;
    opacity: 0;
    width: 0;
`;

const CustomCheckboxLabel = styled.label`
    align-items: center;
    background: var(--bg-text);
    border: 0.0625rem solid #dcdcdc; 
    border-radius: 0.375rem; 
    cursor: pointer;
    height: 1.25rem; 
    left: -0.625rem; 
    margin-right: -0.3125rem;
    position: relative;
    width: 1.25rem;

    &::before {
        background-color: var(--brand-color);
        border-radius: 0.25rem; 
        content: "";
        display: block;
        height: 0.75rem; 
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
    }

    ${CustomCheckboxInput}:checked + &::before {
        opacity: 1;
        width: 0.875rem;
        height: 0.875rem; 
    }
`;

const EmailInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 0.5rem; 
    flex-shrink: 0;
    font-size: 1rem; 
    height: 3.1875rem; 
    margin-top: 1.25rem; 
    padding: 0.625rem; 
    width: 100%;
`;

const ProfessionInput =  styled.input`
background-color: var(--bg-text);
border: none;
border-radius: 0.5rem; 
flex-shrink: 0;
font-size: 1rem; 
height: 3.1875rem; 
margin-top: 1.25rem; 
padding: 0.625rem; 
width: 11.5rem;
`;
const CountryInput =  styled.input`
background-color: var(--bg-text);
border: none;
border-radius: 0.5rem; 
flex-shrink: 0;
font-size: 1rem; 
height: 3.1875rem; 
margin-top: 1.25rem; 
padding: 0.625rem; 
width: 7.813rem;
margin-right: 2.188rem;
`;
const CityInput =  styled.input`
background-color: var(--bg-text);
border: none;
border-radius: 0.5rem; 
flex-shrink: 0;
font-size: 1rem; 
height: 3.1875rem; 
margin-top: 1.25rem; 
padding: 0.625rem; 
width: 11.5rem;
`;
const RelationshipSelect =  styled.select`
background-color: var(--bg-text);
border: none;
border-radius: 0.5rem; 
flex-shrink: 0;
font-size: 1rem; 
height: 2.938rem; 
margin-top: 1.25rem; 
padding: 0.625rem; 
width: 11.313rem;
margin-left: 10.1rem;
`;
const BirthDateInput =  styled.input`
background-color: var(--bg-text);
border: none;
border-radius: 0.5rem; 
flex-shrink: 0;
font-size: 1rem; 
margin-top: 1.25rem; 
padding: 0.625rem; 
width: 7.813rem;
height: 3.1875rem;
margin-right: 2.188rem;
`;

export const inputRow = styled.div`
display: flex;
justify-content: space-between; 
width: 100%
 
`;

const ErrorContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-top: 1.25rem; 
    width: 100%;
`;

const ErrorMessage = styled.p`
    color: var(--error-color);
    font-size: 0.875rem; 
`;

const ForgotPasswordLink = styled.a`
    color: var(--brand-color);
    cursor: pointer;
    display: block;
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.25rem; 
    text-align: center;
    text-decoration-line: underline;
`;

const ForgotPasswordLinkb = styled.a`
    color: var(--brand-color);
    cursor: pointer;
    display: flex; 
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.25rem; 
    text-align: center;
    text-decoration-line: underline;
    background: #EFF3F8;
    width: 21rem;
    height: 3.188rem;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;


const Form = styled.form`
    align-items: flex;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 1.25rem; 
    width: 24rem; 
`;

const LoginButton = styled.button`
    background-color: var(--brand-color);
    border: none;
    border-radius: 0.5rem;
    color: var(--dark-40);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 500;
    height: 3.1875rem; 
    line-height: normal;
    margin-top: 1.25rem; 
    padding: 0.625rem 1.25rem; 
    width: 100%;
`;

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-40);
    border: none;
    border-radius: 1.25rem; 
    height: 37.375rem; 
    width: 24rem; 

    @media (max-width: 36rem) { 
        margin-top: 0;
    }
`;

const LoginTitle = styled.h1`
    color: var(--brand-color);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 1.25rem; 
`;


const LogoImage = styled.img`
    margin-top: 1.25rem; 
    margin-bottom: 1.25rem; 
`;

const PasswordInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 0.5rem;
    flex-shrink: 0;
    font-size: 1rem; 
    height: 3.1875rem; 
    margin-top: 1.25rem; 
    padding: 0.625rem; 
    width: 100%;
`;

const RememberMeContainer = styled.div`
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    margin-top: 1.25rem; 
    margin-left: 0.625rem; 
    user-select: none;
`;

const RememberMeText = styled.span`
    color: #868686;
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 1.2rem;
    margin-left: 0.5rem; 
`;

const ReminderText = styled.p`
    color: #ED6D25;
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;


export {
    CreateAccountButton,
    CustomCheckboxContainer,
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
};
