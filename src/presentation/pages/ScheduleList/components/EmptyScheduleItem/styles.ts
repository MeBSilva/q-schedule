import styled from "styled-components";

export const Schedule = styled.tr`
  display: contents;

  :nth-child(even) td {
    background-color: ${({ theme }) => theme.colors.secondary.white};
  }
`;

export const Content = styled.td`
  grid-column: span 3 / auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.white};
`;
