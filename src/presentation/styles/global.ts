import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary.white};
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  line-height: 3rem;
  min-height: 3rem;
  color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 8px;
  font-size: 1rem;
  border: none;
  padding: 0 2em;
  outline: none;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:active {
    opacity: 0.65;
  }
`;

export const GlobalStyles = createGlobalStyle`
  *{
    font-family: ${({ theme }) => theme.fonts.primary.fontFamily};
  }
  body {
    margin:0;
    display: flex;
    flex-direction: column;
    height:100vh;

   > #root {
      flex:1;
      display: flex;
    }
  }`;
