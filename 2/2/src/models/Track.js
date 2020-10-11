import { v4 as uuidv4 } from 'uuid';

export class Track {
    constructor(name, author, url, album, playlist) {
        this._name = name;
        this._author = author;
        this._url = url;
        this._album = album;
        this._playlist = playlist;

        this._uuid = uuidv4();
    }

    get uuid() {
        return this._uuid;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get url() {
        return this._url;
    }

    get album() {
        return this._album;
    }

    get playlist() {
        return this._playlist;
    }
}
