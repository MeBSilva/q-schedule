import { LocalLoadSchedules } from "@/data/usecases/local";

import { LoadSchedules } from "@/domain/usecases";

import { useScheduleList } from "@/presentation/hooks/scheduleList";

export const makeLocalLoadSchedules = (): LoadSchedules => {
  const { load } = useScheduleList();

  return new LocalLoadSchedules({ load });
};
