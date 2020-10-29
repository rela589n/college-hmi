import Plains from "@/Entities/Terrains/Plains/Plains";

export  default class NullPlains implements Plains {
    windPower(): number {
        return 0;
    }

    clone(): Plains {
        return this;
    }
}
