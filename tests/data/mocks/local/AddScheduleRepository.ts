import { AddScheduleRepository } from "@/data/protocols/local";

import { faker } from "@faker-js/faker";

export class AddScheduleRepositorySpy implements AddScheduleRepository {
  public params?: AddScheduleRepository.Params;

  public result: AddScheduleRepository.Result = {
    endTime: faker.date.soon(),
    startTime: faker.date.recent(),
    title: faker.lorem.sentence(3),
  };

  public async add(
    params: AddScheduleRepository.Params
  ): Promise<AddScheduleRepository.Result> {
    this.params = params;

    return this.result;
  }
}
