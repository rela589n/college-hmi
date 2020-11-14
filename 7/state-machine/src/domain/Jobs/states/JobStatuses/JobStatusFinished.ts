import {JobStatus} from "@/domain/Jobs/states/JobStatus";

export class JobStatusFinished extends JobStatus {
    transitionTo(status: JobStatus): JobStatus {
        throw new Error(`Cant transition from ${this.getStatusString()} status to any other`);
    }

    public static getStatusString(): string {
        return 'JOB_FINISHED';
    }
}
