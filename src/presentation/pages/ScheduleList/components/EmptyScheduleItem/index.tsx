import React from "react";

import * as S from "./styles";

const EmptyScheduleItem = (): React.ReactElement => (
  <S.Schedule>
    <S.Content>You have no schedules at the moment.</S.Content>
  </S.Schedule>
);

export default EmptyScheduleItem;
