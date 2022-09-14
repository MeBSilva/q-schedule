import { AddSchedule } from "@/domain/usecases";

export type AddScheduleRepository = {
  add: (
    params: AddScheduleRepository.Params
  ) => Promise<AddScheduleRepository.Result>;
};

export namespace AddScheduleRepository {
  export type Params = AddSchedule.Params;
  export type Result = AddSchedule.Result;
}
