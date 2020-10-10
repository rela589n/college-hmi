import { v4 as uuidv4 } from 'uuid';

export default class {
    constructor(name, tracks = []) {
        this.name = name;
        this.tracks= tracks;
        this.uuid = uuidv4();
    }

    toString() {
        return this.name;
    }

    addTrack(track) {
        this.tracks.push(track);
    }

}