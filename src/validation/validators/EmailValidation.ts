import { InvalidFieldError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols";

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error | undefined {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (
      !input[this.field] ||
      (input[this.field] && !emailRegex.test(input[this.field]))
    )
      return new InvalidFieldError();
  }
}
