import Sea from "@/Entities/Terrains/Sea/Sea";
import Forest from "@/Entities/Terrains/Forest/Forest";
import Plains from "@/Entities/Terrains/Plains/Plains";

export default interface TerrainFactory {
    makeSea(): Sea;
    makeForest(): Forest;
    makePlains(treesCount: number): Plains;
}
