export abstract class JobStatus {
    public static getStatusString(): string {
        throw new Error('getStatusString() is not implemented in child')
    }

    public getStatusString(): string {
        // @ts-ignore
        return this.constructor.getStatusString();
    }

    public abstract transitionTo(status: JobStatus): JobStatus;

    public equalsTo(another: JobStatus) {
        return this.getStatusString() === another.getStatusString();
    }
}
