import {JobStatus} from "@/domain/Jobs/states/JobStatus";
import {JobStatusArchived} from "@/domain/Jobs/states/JobStatuses/JobStatusArchived";
import {JobStatusNew} from "@/domain/Jobs/states/JobStatuses/JobStatusNew";
import {JobStatusInWork} from "@/domain/Jobs/states/JobStatuses/JobStatusInWork";
import {JobStatusFinished} from "@/domain/Jobs/states/JobStatuses/JobStatusFinished";

export class Job {
    public status: JobStatus;

    constructor() {
        this.status = new JobStatusNew();
    }

    applyWork() {
        console.log('apply work');

        this.status = this.status.transitionTo(new JobStatusInWork());
    }

    finishWork() {
        console.log('finish work');

        this.status = this.status.transitionTo(new JobStatusFinished());
    }

    putInArchive() {
        console.log('put in archive');

        this.status = this.status.transitionTo(new JobStatusArchived(this.status));
    }

    retrieveFromArchive(previousStatus: JobStatus) {
        console.log('retrieve from archive');

        this.status = this.status.transitionTo(previousStatus);
    }
}
