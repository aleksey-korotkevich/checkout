import AbstractValiator from './AbstractValidator'

export class MinLengthValidator extends AbstractValiator {
  constructor(message: string, private minLength: number) {
    super(message)
  }

  public validate(value: string): string | undefined {
    if (value.length < this.minLength) {
      return this.message
    }
  }
}

export class MaxLengthValidator extends AbstractValiator {
  constructor(message: string, private maxLength: number) {
    super(message)
  }

  public validate(value: string): string | undefined {
    if (value.length > this.maxLength) {
      return this.message
    }
  }
}
