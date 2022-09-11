import { LoadSchedulesRepository } from "@/data/protocols/local";

import { faker } from "@faker-js/faker";

export const mockLocalSchedule = (
  refDate: Date
): LoadSchedulesRepository.Result[number] => ({
  endTime: faker.date.soon(1, refDate),
  startTime: faker.date.recent(1, refDate),
  title: faker.lorem.sentence(3),
});

export const mockLocalScheduleList = (): LoadSchedulesRepository.Result => [
  mockLocalSchedule(new Date("2020-01-01")),
  mockLocalSchedule(new Date("2021-01-01")),
  mockLocalSchedule(new Date("2022-01-01")),
];

export class LoadSchedulesRepositorySpy implements LoadSchedulesRepository {
  public result: LoadSchedulesRepository.Result = mockLocalScheduleList();

  public async load(): Promise<LoadSchedulesRepository.Result> {
    return this.result;
  }
}
