import {Mediator} from "@/components/Mediators/Mediator";

export class AnotherComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public doAnotherThis(): void {
        console.log('AnotherComponent doAnotherThis() method');
        this.mediator.notify(this, 'C');
    }

    public doAnotherThat(): void {
        console.log('AnotherComponent doAnotherThat() method');
        this.mediator.notify(this, 'D');
    }
}
