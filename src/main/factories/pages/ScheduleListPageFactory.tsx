import React from "react";

import { LocalAddSchedule, LocalLoadSchedules } from "@/data/usecases/local";

import { LoadSchedules, AddSchedule } from "@/domain/usecases";

import { makeAddScheduleValidation } from "@/main/factories/validation";

import { useScheduleList } from "@/presentation/hooks/scheduleList";

import { ScheduleList } from "@/presentation/pages";

export const MakeScheduleList = (): React.ReactElement => {
  const { add, load } = useScheduleList();

  const makeLocalAddSchedule = (): AddSchedule =>
    new LocalAddSchedule({ add }, { load });

  const makeLocalLoadSchedules = (): LoadSchedules =>
    new LocalLoadSchedules({ load });

  return (
    <ScheduleList
      validation={makeAddScheduleValidation()}
      addSchedule={makeLocalAddSchedule()}
      loadScheduleList={makeLocalLoadSchedules()}
    />
  );
};
