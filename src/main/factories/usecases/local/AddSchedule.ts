import { LocalAddSchedule } from "@/data/usecases/local";

import { AddSchedule } from "@/domain/usecases";

import { useScheduleList } from "@/presentation/hooks/scheduleList";

export const makeLocalAddSchedule = (): AddSchedule => {
  const { add, load } = useScheduleList();

  return new LocalAddSchedule({ add }, { load });
};
