import Sea from "@/Entities/Terrains/Sea/Sea";

export default class NullSea implements Sea {
    noise(): string {
        return "";
    }
}
