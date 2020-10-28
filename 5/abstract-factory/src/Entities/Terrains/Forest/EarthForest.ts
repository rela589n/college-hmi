import Forest from "@/Entities/Terrains/Forest/Forest";

export default class EarthForest implements Forest {
    private readonly humidity: number;

    constructor(humidity: number) {
        this.humidity = humidity;
    }

    treesHeight(): number {
        return this.humidity * 10;
    }
}
