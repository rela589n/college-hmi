import {JobStatus} from "@/domain/Jobs/states/JobStatus";
import {JobStatusNew} from "@/domain/Jobs/states/JobStatuses/JobStatusNew";

export class JobStatusArchived extends JobStatus {
    private previousStatus: JobStatus;

    constructor(previousStatus: JobStatus) {
        super();
        this.previousStatus = previousStatus;
    }

    public static getStatusString() {
        return 'JOB_ARCHIVED';
    }

    transitionTo(status: JobStatus): JobStatus {
        if (status.equalsTo(this.previousStatus)) {
            return status;
        }

        throw new Error(JobStatusArchived.getStatusString() + ' can only transition into previous status: ' + JobStatusNew.getStatusString())
    }
}
