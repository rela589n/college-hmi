import {JobStatus} from "@/domain/Jobs/states/JobStatus";
import {JobStatusFinished} from "@/domain/Jobs/states/JobStatuses/JobStatusFinished";

export class JobStatusInWork extends JobStatus {
    transitionTo(status: JobStatus): JobStatus {
        if (status instanceof JobStatusFinished) {
            return status;
        }

        throw new Error(`${this.getStatusString()} can only transition into ${JobStatusFinished.getStatusString()} status`);
    }

    public static getStatusString(): string {
        return 'JOB_IN_WORK';
    }
}
