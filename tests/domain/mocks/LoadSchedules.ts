import { LoadSchedules } from "@/domain/usecases";

import { mockScheduleModel } from "./Schedule";

export const mockSchedulesList = (): LoadSchedules.Result => [
  mockScheduleModel(new Date("2020-01-01")),
  mockScheduleModel(new Date("2021-01-01")),
  mockScheduleModel(new Date("2022-01-01")),
];

export class LoadSchedulesSpy implements LoadSchedules {
  public callsCount = 0;

  public schedules = mockSchedulesList();

  public async load(): Promise<LoadSchedules.Result> {
    this.callsCount += 1;

    return this.schedules;
  }
}
