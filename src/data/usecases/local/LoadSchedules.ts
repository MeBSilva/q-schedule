import { LoadSchedulesRepository } from "@/data/protocols/local";

import { LoadSchedules } from "@/domain/usecases";

export class LocalLoadSchedules implements LoadSchedules {
  constructor(
    private readonly loadSchedulesRepository: LoadSchedulesRepository
  ) {}

  public async load(): Promise<LoadSchedules.Result> {
    const schedules = await this.loadSchedulesRepository.load();

    return schedules;
  }
}
