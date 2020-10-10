import {Database} from '@vuex-orm/core'
import Author from "~/models/Author";
import Track from "~/models/Track";
import Playlist from "~/models/Playlist";
import TrackPlaylist from "~/models/TrackPlaylist";

const database = new Database()

database.register(Author)
database.register(Track)
database.register(Playlist)
database.register(TrackPlaylist)

export default database
