import styled from "styled-components";

import { Container } from "@/presentation/styles/global";

export const HomeContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.secondary.white};
  background-image: url("01.jpg");
  background-size: cover;
  justify-content: center;
`;

export const HomeContentWrapper = styled(Container)`
  background: none;
  flex-grow: 0.5;
  align-self: center;
  max-width: 50%;
  border-radius: 10px;
  padding: 0 2em 0 2em;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeText = styled.p`
  color: ${({ theme }) => theme.colors.secondary.white};
  font-size: 1rem;
  margin-bottom: 3em;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  font-size: 6rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.secondary.white};
  align-self: center;
  margin: 0;
`;

export const HomeSubTitle = styled.h2`
  margin: 0.5em 0 1em 0;
  font-size: 1.7rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.secondary.white};
`;
