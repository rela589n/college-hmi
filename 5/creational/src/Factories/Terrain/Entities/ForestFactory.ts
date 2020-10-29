import Forest from "@/Entities/Terrains/Forest/Forest";
import EarthForest from "@/Entities/Terrains/Forest/EarthForest";
import MarsForest from "@/Entities/Terrains/Forest/MarsForest";
import NullForest from "@/Entities/Terrains/Forest/NullForest";

export default class ForestFactory {
    fabricate(type: string, params: any[]): Forest {
        switch (type) {
            case 'earth':
                // @ts-ignore
                return new EarthForest(...params);
            case 'mars':
                // @ts-ignore
                return new MarsForest(...params);
            case '':
                return new NullForest();
            default:
                throw new Error(`Type ${type} not found`);
        }
    }
}
