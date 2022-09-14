import { Schedule } from "@/domain/models";

export interface AddSchedule {
  add: (params: AddSchedule.Params) => Promise<AddSchedule.Result>;
}

export namespace AddSchedule {
  export type Params = Schedule;

  export type Result = Schedule;
}
