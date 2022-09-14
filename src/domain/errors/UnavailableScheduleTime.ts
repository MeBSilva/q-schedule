export class UnavailableScheduleTimeError extends Error {
  constructor() {
    super("The chosen interval is not available.");
    this.name = "UnavailableScheduleTimeError";
  }
}
