import Plains from "@/Entities/Terrains/Plains/Plains";

export default class MarsPlains implements Plains {
    windPower(): number {
        return 250;
    }

    clone(): Plains {
        return new MarsPlains();
    }
}
