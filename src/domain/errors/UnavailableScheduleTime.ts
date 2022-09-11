export class UnavailableScheduleTimeError extends Error {
  constructor() {
    super("Este horário não está disponível.");
    this.name = "UnavailableScheduleTimeError";
  }
}
