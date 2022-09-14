import { InvalidFieldError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols";

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: any): Error | undefined {
    if (input[this.field]?.length < this.minLength)
      return new InvalidFieldError();
  }
}
