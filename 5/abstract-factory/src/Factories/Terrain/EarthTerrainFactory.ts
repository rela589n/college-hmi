import TerrainFactory from "@/Factories/Terrain/TerrainFactory";
import EarthForest from "@/Entities/Terrains/Forest/EarthForest";
import EarthPlains from "@/Entities/Terrains/Plains/EarthPlains";
import EarthSea from "@/Entities/Terrains/Sea/EarthSea";

export default class EarthTerrainFactory implements TerrainFactory {
    makeForest(): EarthForest {
        return new EarthForest(1.6);
    }

    makePlains(treesCount: number): EarthPlains {
        return new EarthPlains(treesCount);
    }

    makeSea(): EarthSea {
        return new EarthSea();
    }
}
