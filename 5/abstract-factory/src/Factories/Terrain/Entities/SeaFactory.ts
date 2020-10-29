import EarthSea from "@/Entities/Terrains/Sea/EarthSea";
import MarsSea from "@/Entities/Terrains/Sea/MarsSea";
import NullSea from "@/Entities/Terrains/Sea/NullSea";

export default class SeaFactory {
    fabricate(type: string, params: any[]) {
        switch (type) {
            case 'earth':
                // @ts-ignore
                return new EarthSea(...params);
            case 'mars':
                // @ts-ignore
                return new MarsSea(...params);
            case '':

                return new NullSea();
            default:
                throw new Error(`Type ${type} not found`);
        }
    }
}
