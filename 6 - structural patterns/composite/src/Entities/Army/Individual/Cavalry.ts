import {Unit} from "@/Entities/Army/Unit";

export class Cavalry extends Unit {
    bombardStrength(): number {
        return 30;
    }

    defensiveStrength(): number {
        return 40;
    }
}
