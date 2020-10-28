import Sea from "@/Entities/Terrains/Sea/Sea";

export default class MarsSea implements Sea {
    private message: string = 'Mars acid!!';

    noise(): string {
        return this.message;
    }
}
