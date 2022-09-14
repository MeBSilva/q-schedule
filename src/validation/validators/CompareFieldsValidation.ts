import { InvalidFieldError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols";

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate(input: any): Error | undefined {
    if (input[this.field] !== input[this.fieldToCompare]) {
      return new InvalidFieldError();
    }
  }
}
