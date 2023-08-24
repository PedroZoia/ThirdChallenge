import styled from "styled-components";

export const EditFormContainer = styled.div`
  width: 37rem; 
  background: var(--dark-30);
  border-radius: 1rem; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
  padding: 1.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 0.75rem;
  }

  h2 {
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    width: 215px;
    height: 51px;
    color: var(--dark-20);
    position: relative;
    background-image: url('../../assets/img/background-edit.svg'); 
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    display: flex;
    align-items: center;
  }

  h2 p {
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
    margin: 0;
  }

  > h3 {
    font-size: 2.25rem; 
    font-weight: 600;
    color: var(--brand-color);
    text-align: center;
    font-style: normal;
    line-height: normal;
    letter-spacing: 3px;
  }

  p[contenteditable="true"] {
    outline: none;
  }

  @media (max-width: 48rem) {
    width: 100%; 
  }

  button {
    width: 21rem;
    height: 3.188rem;
    border:none;
    border-radius: 0.5rem; 
    color: var(--dark-40);
    background-color: var(--brand-color);
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;
