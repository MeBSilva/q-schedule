import { LoadSchedules } from "@/domain/usecases";

export type LoadSchedulesRepository = {
  load: () => Promise<LoadSchedulesRepository.Result>;
};

export namespace LoadSchedulesRepository {
  export type Result = LoadSchedules.Result;
}
