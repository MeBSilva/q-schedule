export class InvalidScheduleTimeError extends Error {
  constructor() {
    super("O intervalo de horário escolhido é inválido.");
    this.name = "InvalidScheduleTimeError";
  }
}
