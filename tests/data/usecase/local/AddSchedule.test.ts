import { faker } from "@faker-js/faker";

import { LocalAddSchedule } from "@/data/usecases/local";
// import { HttpStatusCode } from '@/data/protocols/http'
import {
  InvalidScheduleTimeError,
  UnavailableScheduleTimeError,
} from "@/domain/errors";
import {
  mockAddScheduleParams,
  mockAddScheduleResult,
} from "@/tests/domain/mocks";
import {
  AddScheduleRepositorySpy,
  LoadSchedulesRepositorySpy,
  mockLocalScheduleList,
} from "@/tests/data/mocks/local";

type SutTypes = {
  sut: LocalAddSchedule;
  addScheduleRepositorySpy: AddScheduleRepositorySpy;
  loadSchedulesRepositorySpy: LoadSchedulesRepositorySpy;
};

const makeSut = (): SutTypes => {
  const addScheduleRepositorySpy = new AddScheduleRepositorySpy();
  const loadSchedulesRepositorySpy = new LoadSchedulesRepositorySpy();

  const sut = new LocalAddSchedule(
    addScheduleRepositorySpy,
    loadSchedulesRepositorySpy
  );

  return { sut, addScheduleRepositorySpy, loadSchedulesRepositorySpy };
};

describe("LocalAddAccount", () => {
  it("Should throw InvalidScheduleTimeError if start date is bigger than the end date", async () => {
    const { sut } = makeSut();
    const promise = sut.add({
      endTime: faker.date.recent(),
      startTime: faker.date.soon(),
      title: faker.lorem.sentence(3),
    });

    await expect(promise).rejects.toThrow(new InvalidScheduleTimeError());
  });

  it("Should throw UnavailableScheduleTimeError if the schedule date is unavailable", async () => {
    const { sut, loadSchedulesRepositorySpy } = makeSut();
    loadSchedulesRepositorySpy.result = mockLocalScheduleList();

    const randomSchedule = faker.helpers.arrayElement(
      loadSchedulesRepositorySpy.result
    );

    const promise1 = sut.add({
      endTime: faker.date.soon(),
      startTime: faker.date.between(
        randomSchedule.startTime,
        randomSchedule.endTime
      ),
      title: faker.lorem.sentence(3),
    });

    const promise2 = sut.add({
      endTime: faker.date.between(
        randomSchedule.startTime,
        randomSchedule.endTime
      ),
      startTime: faker.date.recent(1, randomSchedule.startTime),
      title: faker.lorem.sentence(3),
    });

    const promise3 = sut.add({
      endTime: faker.date.soon(1, randomSchedule.endTime),
      startTime: faker.date.recent(1, randomSchedule.startTime),
      title: faker.lorem.sentence(3),
    });

    await expect(promise1).rejects.toThrow(new UnavailableScheduleTimeError());
    await expect(promise2).rejects.toThrow(new UnavailableScheduleTimeError());
    await expect(promise3).rejects.toThrow(new UnavailableScheduleTimeError());
  });

  it("Should return an AddSchedule.Result if the schedule time is available and valid", async () => {
    const { sut, addScheduleRepositorySpy } = makeSut();
    const result = mockAddScheduleResult();
    addScheduleRepositorySpy.result = result;

    const schedule = await sut.add(mockAddScheduleParams());

    expect(schedule).toEqual(result);
  });
});
