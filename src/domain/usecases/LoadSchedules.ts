import { Schedule } from "@/domain/models";

export interface LoadSchedules {
  load: () => Promise<LoadSchedules.Result>;
}

export namespace LoadSchedules {
  export type Result = Schedule[];
}
