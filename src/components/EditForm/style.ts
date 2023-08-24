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
    fill: #EFF3F8;
  }

  p {
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
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
`;
