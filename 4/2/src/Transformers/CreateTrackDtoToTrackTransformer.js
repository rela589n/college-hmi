import {Track} from "../models/Track";

export default class  {
    static transform(dto) {
        return new Track(dto.name, dto.author, dto.url, dto.album, dto.playlist);
    }
}