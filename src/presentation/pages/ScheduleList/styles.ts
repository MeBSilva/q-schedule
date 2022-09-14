import styled from "styled-components";

import { Container } from "@/presentation/styles/global";

export const ScheduleListContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.secondary.white};
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 1em 0 1em 0;
`;
