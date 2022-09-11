import { Schedule } from "@/domain/models";

import { faker } from "@faker-js/faker";

export const mockScheduleModel = (refDate: Date = new Date()): Schedule => ({
  startTime: faker.date.recent(1, refDate),
  endTime: faker.date.soon(1, refDate),
  title: faker.lorem.sentence(3),
});
