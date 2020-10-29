import Forest from "@/Entities/Terrains/Forest/Forest";

export default class NullForest implements Forest {
    treesHeight(): number {
        return 0;
    }

    clone(): Forest {
        return this;
    }
}
