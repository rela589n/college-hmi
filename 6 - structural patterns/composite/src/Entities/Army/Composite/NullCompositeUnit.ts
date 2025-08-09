import {CompositeUnit} from "@/Entities/Army/CompositeUnit";
import {Unit} from "@/Entities/Army/Unit";

export class NullCompositeUnit extends CompositeUnit {
    private static instance: NullCompositeUnit|null = null;

    private constructor() {
        super();
    }

    public static getInstance(): CompositeUnit {
        if (this.instance === null) {
            this.instance = new NullCompositeUnit();
        }

        return this.instance;
    }

    public addUnit(unit: Unit) {
        // ignore
    }

    public removeUnit(unit: Unit) {
        // ignore
    }

    bombardStrength(): number {
        return 0;
    }

    defensiveStrength(): number {
        return 0;
    }
}
