import {Unit} from "@/Entities/Army/Unit";

export abstract class CompositeUnit extends Unit {
    protected nestedUnits: Array<Unit> = [];

    public addUnit(unit: Unit) {
        this.nestedUnits.push(unit);
    }

    public removeUnit(unit: Unit) {
        this.nestedUnits = this.nestedUnits.filter((u: Unit) => u === unit);
    }
}
