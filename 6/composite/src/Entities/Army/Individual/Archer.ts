import {Unit} from "@/Entities/Army/Unit";

export class Archer extends Unit {
    bombardStrength(): number {
        return 40;
    }

    defensiveStrength(): number {
        return 35;
    }
}
