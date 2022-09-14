import React, { useState } from "react";

import { useScheduleList } from "@/presentation/hooks/scheduleList";

import ScheduleItem from "../ScheduleItem";
import EmptyScheduleItem from "../EmptyScheduleItem";

import * as S from "./styles";

const ScheduleGrid = (): React.ReactElement => {
  const { scheduleList, orderScheduleList } = useScheduleList();

  const [sortWay, setSortWay] = useState<{
    [key in "title" | "endTime" | "startTime"]: "asc" | "desc";
  }>({
    title: "asc",
    endTime: "asc",
    startTime: "asc",
  });

  const handleSort = (field: keyof typeof sortWay) => {
    let currentFieldSortWay: "asc" | "desc" = "asc";
    if (sortWay[field] === "asc") currentFieldSortWay = "desc";

    orderScheduleList(field, sortWay[field]);
    setSortWay((_) => ({
      title: "asc",
      endTime: "asc",
      startTime: "asc",
      [field]: currentFieldSortWay,
    }));
  };

  return (
    <S.ScheduleGridContainer>
      <thead>
        <tr>
          <th>
            Title
            <span
              className={`arrow ${sortWay.title}`}
              onClick={() => handleSort("title")}
            />
          </th>
          <th>
            Start Time
            <span
              className={`arrow ${sortWay.startTime}`}
              onClick={() => handleSort("startTime")}
            />
          </th>
          <th>
            End Time
            <span
              className={`arrow ${sortWay.endTime}`}
              onClick={() => handleSort("endTime")}
            />
          </th>
        </tr>
      </thead>

      <tbody>
        {scheduleList.length ? (
          scheduleList.map((schedule, id) => (
            <ScheduleItem key={id} {...schedule} />
          ))
        ) : (
          <EmptyScheduleItem />
        )}
      </tbody>
    </S.ScheduleGridContainer>
  );
};

export default ScheduleGrid;
