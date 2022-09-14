import React from "react";

import { Schedule } from "@/domain/models";

import * as S from "./styles";

type Props = Schedule;

const ScheduleItem = ({
  endTime,
  startTime,
  title,
}: Props): React.ReactElement => (
  <S.Schedule>
    <S.Content>
      <span>{title}</span>
    </S.Content>
    <S.Content>
      <span>
        {startTime.toLocaleString("pt-BR", {
          hour12: false,
        })}
      </span>
    </S.Content>
    <S.Content>
      <span>
        {endTime.toLocaleString("pt-BR", {
          hour12: false,
        })}
      </span>
    </S.Content>
  </S.Schedule>
);

export default ScheduleItem;
