import { Schedule } from "@/domain/models";
import { AddSchedule, LoadSchedules } from "@/domain/usecases";

type ScheduleListItem = Schedule;

type ScheduleListState = ScheduleListItem[];

type ScheduleListContextData = AddSchedule &
  LoadSchedules & {
    scheduleList: ScheduleListState;
    orderScheduleList: (
      orderBy: keyof ScheduleListItem,
      way: "asc" | "desc"
    ) => void;
  };

export type { ScheduleListContextData, ScheduleListState, ScheduleListItem };
