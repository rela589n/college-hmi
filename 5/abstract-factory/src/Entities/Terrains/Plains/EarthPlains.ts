import Plains from "@/Entities/Terrains/Plains/Plains";

export default class EarthPlains implements Plains {
    private readonly treesCount: number;

    constructor(treesCount: number) {
        this.treesCount = treesCount;
    }

    windPower(): number {
        return Math.max(0, 20 - 0.1 * (this.treesCount));
    }

    clone(): Plains {
        return new EarthPlains(this.treesCount);
    }
}
