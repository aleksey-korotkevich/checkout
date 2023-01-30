import AbstractValiator from './AbstractValidator'

export default class RequiredValidator extends AbstractValiator {
  public validate(value?: string): string | undefined {
    if (!Boolean(value)) {
      return this.message
    }
  }
}
