import TerrainFactory from "@/Factories/Terrain/TerrainFactory";
import Sea from "@/Entities/Terrains/Sea/Sea";
import Forest from "@/Entities/Terrains/Forest/Forest";
import Plains from "@/Entities/Terrains/Plains/Plains";
import NullForest from "@/Entities/Terrains/Forest/NullForest";
import NullPlains from "@/Entities/Terrains/Plains/NullPlains";
import NullSea from "@/Entities/Terrains/Sea/NullSea";

export default class NullTerrainFactory implements TerrainFactory {
    makeForest(): Forest {
        return new NullForest();
    }

    makePlains(treesCount: number): Plains {
        return new NullPlains();
    }

    makeSea(): Sea {
        return new NullSea();
    }
}
