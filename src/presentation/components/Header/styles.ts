import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  justify-content: center;
  min-height: 5em;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  padding: 2em 3.5em;
`;
export const LogoutButton = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const LogoutButtonText = styled.span`
  font-size: 1rem;
  margin-bottom: 0.5em;
`;

export const LogoutAnchor = styled.a`
  color: ${({ theme }) => theme.colors.primary.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
