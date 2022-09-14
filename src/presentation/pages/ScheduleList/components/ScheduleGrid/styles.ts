import styled from "styled-components";

export const ScheduleGridContainer = styled.table`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.primary.white};
  align-self: center;
  border-radius: 10px;
  box-shadow: 1px 1px 3px -1px ${({ theme }) => theme.colors.primary.black};
  padding: 1em;

  thead,
  tbody,
  tr {
    display: contents;
  }

  td,
  th {
    padding: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .arrow {
      margin-left: 1em;
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      cursor: pointer;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);

      &.desc {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
      &.asc {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
    }
  }

  th {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary.blue};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;
