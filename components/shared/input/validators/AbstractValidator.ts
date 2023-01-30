export default abstract class AbstractValiator {
    public abstract validate(value: string): string | undefined;

    constructor(public message: string) {}
}