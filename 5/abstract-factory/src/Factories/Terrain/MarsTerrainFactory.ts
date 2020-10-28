import TerrainFactory from "./TerrainFactory";
import MarsForest from "../../Entities/Terrains/Forest/MarsForest";
import MarsPlains from "../../Entities/Terrains/Plains/MarsPlains";
import MarsSea from "../../Entities/Terrains/Sea/MarsSea";

export default class MarsTerrainFactory implements TerrainFactory {
    makeForest(): MarsForest {
        return new MarsForest();
    }

    makePlains(treesCount: number): MarsPlains {
        return new MarsPlains();
    }

    makeSea(): MarsSea {
        return new MarsSea();
    }
}
