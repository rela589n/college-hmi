import {Mediator} from "@/components/Mediators/Mediator";

export class SomeComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public doThis(): void {
        console.log('SomeComponent doThis() method');
        this.mediator.notify(this, 'A');
    }

    public doThat(): void {
        console.log('SomeComponent doThat() method');
        this.mediator.notify(this, 'B');
    }
}
