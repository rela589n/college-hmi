import {CompositeUnit} from "@/Entities/Army/CompositeUnit";
import {Unit} from "@/Entities/Army/Unit";
import {Archer} from "@/Entities/Army/Individual/Archer";
import {LaserCannon} from "@/Entities/Army/Individual/LaserCannon";

export class TroopCarrier extends CompositeUnit {
    addUnit(unit: Archer | LaserCannon) {
        super.addUnit(unit);
    }

    bombardStrength(): number {
        const nestedUnitsStrength = this.nestedUnits.reduce(
            (carry: number, unit: Unit) => carry + unit.bombardStrength(),
            0,
        );

        return 0.8
            * nestedUnitsStrength;
    }

    defensiveStrength(): number {
        const nestedUnitsStrength = this.nestedUnits.reduce(
            (carry: number, unit: Unit) => carry + unit.defensiveStrength(),
            0
        );

        return 128
            + nestedUnitsStrength;
    }
}
