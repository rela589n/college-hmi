import {CompositeUnit} from "@/Entities/Army/CompositeUnit";
import {Unit} from "@/Entities/Army/Unit";

export class Army extends CompositeUnit {
    bombardStrength(): number {
        return this.nestedUnits.reduce(
            (carry: number, unit: Unit) => carry + unit.bombardStrength(),
            0
        );
    }

    defensiveStrength(): number {
        return this.nestedUnits.reduce(
            (carry: number, unit: Unit) => carry + unit.defensiveStrength(),
            0
        );
    }
}
