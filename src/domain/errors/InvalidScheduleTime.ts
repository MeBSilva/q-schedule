export class InvalidScheduleTimeError extends Error {
  constructor() {
    super("The chosen interval is invalid.");
    this.name = "InvalidScheduleTimeError";
  }
}
