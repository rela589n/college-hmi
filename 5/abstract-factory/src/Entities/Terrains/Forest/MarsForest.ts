import Forest from "@/Entities/Terrains/Forest/Forest";

export default class MarsForest implements Forest {
    treesHeight(): number {
        return 1;
    }
}
