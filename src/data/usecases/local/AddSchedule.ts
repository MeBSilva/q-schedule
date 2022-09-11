import {
  AddScheduleRepository,
  LoadSchedulesRepository,
} from "@/data/protocols/local";

import { AddSchedule } from "@/domain/usecases";
import {
  InvalidScheduleTimeError,
  UnavailableScheduleTimeError,
} from "@/domain/errors";

export class LocalAddSchedule implements AddSchedule {
  constructor(
    private readonly addScheduleRepository: AddScheduleRepository,
    private readonly loadSchedulesRepository: LoadSchedulesRepository
  ) {}

  async add(params: AddSchedule.Params): Promise<AddSchedule.Result> {
    if (params.startTime.getTime() > params.endTime.getTime())
      throw new InvalidScheduleTimeError();

    const schedules = await this.loadSchedulesRepository.load();

    if (
      schedules.find((schedule) => {
        const newScheduleStartTime = params.startTime.getTime();
        const newScheduleEndTime = params.endTime.getTime();

        const scheduleStartTime = schedule.startTime.getTime();
        const scheduleEndTime = schedule.endTime.getTime();

        return (
          (newScheduleStartTime >= scheduleStartTime &&
            newScheduleStartTime < scheduleEndTime) ||
          (newScheduleEndTime <= scheduleEndTime &&
            newScheduleEndTime > scheduleStartTime) ||
          (newScheduleStartTime <= scheduleStartTime &&
            newScheduleEndTime >= scheduleEndTime)
        );
      })
    )
      throw new UnavailableScheduleTimeError();

    const newSchedule = await this.addScheduleRepository.add(params);

    return newSchedule;
  }
}
