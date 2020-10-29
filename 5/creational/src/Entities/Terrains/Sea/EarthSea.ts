import Sea from "@/Entities/Terrains/Sea/Sea";

export default class EarthSea implements Sea {
    private message: string = 'Shush! Shush! From earth sea.';

    noise(): string {
        return this.message;
    }

    clone(): Sea {
        return new EarthSea();
    }
}
