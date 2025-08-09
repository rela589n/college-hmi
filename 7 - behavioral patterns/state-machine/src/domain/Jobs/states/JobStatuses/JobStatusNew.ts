import {JobStatus} from "@/domain/Jobs/states/JobStatus";
import {JobStatusInWork} from "@/domain/Jobs/states/JobStatuses/JobStatusInWork";
import {JobStatusArchived} from "@/domain/Jobs/states/JobStatuses/JobStatusArchived";

export class JobStatusNew extends JobStatus {
    transitionTo(status: JobStatus): JobStatus {
        if (status instanceof JobStatusInWork) {
            return status;
        }

        if (status instanceof JobStatusArchived) {
            return status;
        }

        throw new Error('New status can only transition into ' + JobStatusInWork.getStatusString() + ' and ' + JobStatusArchived.getStatusString());
    }

    public static getStatusString(): string {
        return 'JOB_NEW';
    }
}
