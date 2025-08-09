import {Unit} from "@/Entities/Army/Unit";

export class LaserCannon extends Unit {
    bombardStrength(): number {
        return 200;
    }

    defensiveStrength(): number {
        return 20;
    }
}
