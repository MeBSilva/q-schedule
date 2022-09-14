import { ValidationComposite } from "@/main/composites";
import { ValidationBuilder as Builder } from "@/main/builders";

export const makeAddScheduleValidation = (): ValidationComposite =>
  ValidationComposite.build([
    ...Builder.field("title").required().min(1).build(),
    ...Builder.field("endTime").required().min(10).build(),
    ...Builder.field("startTime").required().min(10).build(),
  ]);
