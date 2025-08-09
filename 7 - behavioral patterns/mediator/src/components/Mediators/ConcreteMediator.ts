import {Mediator} from "@/components/Mediators/Mediator";
import {SomeComponent} from "@/components/SomeComponent";
import {AnotherComponent} from "@/components/AnotherComponent";

export class ConcreteMediator implements Mediator {
    private _someComponent: SomeComponent = new SomeComponent(this);
    private _anotherComponent: AnotherComponent = new AnotherComponent(this);

    get someComponent(): SomeComponent {
        return this._someComponent;
    }

    get anotherComponent(): AnotherComponent {
        return this._anotherComponent;
    }

    notify(sender: object, event: string): void {
        console.log('handle event: ' + event);

        switch (event) {
            case 'A':
                this._anotherComponent.doAnotherThat();
                break;
            case 'D':
                this._someComponent.doThat();
                this._anotherComponent.doAnotherThis();

                break;
        }
    }
}
