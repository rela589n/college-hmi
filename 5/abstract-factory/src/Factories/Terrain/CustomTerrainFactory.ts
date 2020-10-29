import TerrainFactory from "@/Factories/Terrain/TerrainFactory";
import Forest from "@/Entities/Terrains/Forest/Forest";
import Plains from "@/Entities/Terrains/Plains/Plains";
import Sea from "@/Entities/Terrains/Sea/Sea";

export default class CustomTerrainFactory implements TerrainFactory {
    private forestPrototype: Forest;
    private plainsPrototype: Plains;
    private seaPrototype: Sea;

    constructor(forestPrototype: Forest, plainsPrototype: Plains, seaPrototype: Sea) {
        this.forestPrototype = forestPrototype;
        this.plainsPrototype = plainsPrototype;
        this.seaPrototype = seaPrototype;
    }

    makeForest(): Forest {
        return this.forestPrototype.clone();
    }

    makePlains(treesCount: number = -1): Plains {
        return this.plainsPrototype.clone();
    }

    makeSea(): Sea {
        return this.seaPrototype.clone();
    }
}
