import { faker } from "@faker-js/faker";

import { AddSchedule } from "@/domain/usecases";

import { mockScheduleModel } from "./Schedule";

export const mockAddScheduleParams = (): AddSchedule.Params => ({
  endTime: faker.date.soon(),
  startTime: faker.date.recent(),
  title: faker.lorem.sentence(3),
});

export const mockAddScheduleResult = (): AddSchedule.Result =>
  mockScheduleModel();

export class AddScheduleSpy implements AddSchedule {
  public schedule = mockAddScheduleResult();

  public params?: AddSchedule.Params;

  public callsCount = 0;

  public async add(params: AddSchedule.Params): Promise<AddSchedule.Result> {
    this.params = params;
    this.callsCount += 1;
    return this.schedule;
  }
}
