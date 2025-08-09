import {CompositeUnit} from "@/Entities/Army/CompositeUnit";
import {NullCompositeUnit} from "@/Entities/Army/Composite/NullCompositeUnit";

export abstract class Unit {
    public abstract bombardStrength(): number;

    public abstract defensiveStrength(): number;

    // @ts-ignore
    public getComposite(): CompositeUnit {
        if (this instanceof CompositeUnit) {
            return this;
        }

        // ??? Super expression must either be null or a function
        // return NullCompositeUnit.getInstance();
    }
}
