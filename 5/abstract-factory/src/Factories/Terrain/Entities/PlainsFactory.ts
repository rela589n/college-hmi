import Plains from "@/Entities/Terrains/Plains/Plains";
import EarthPlains from "@/Entities/Terrains/Plains/EarthPlains";
import MarsPlains from "@/Entities/Terrains/Plains/MarsPlains";
import NullPlains from "@/Entities/Terrains/Plains/NullPlains";

export default class PlainsFactory {
    fabricate(type: string, params: any[]): Plains {
        switch (type) {
            case 'earth':
                // @ts-ignore
                return new EarthPlains(...params);
            case 'mars':
                // @ts-ignore
                return new MarsPlains(...params);
            case '':

                return new NullPlains();
            default:
                throw new Error(`Type ${type} not found`);
        }
    }
}
