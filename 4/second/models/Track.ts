import {Model} from "@vuex-orm/core"
import Author from "~/models/Author"
import Playlist from "~/models/Playlist"
import {v4 as uuid} from "uuid"
import TrackPlaylist from "~/models/TrackPlaylist";
import Fields from "@vuex-orm/core/lib/model/contracts/Fields";

export default class Track extends Model {
  static entity: string = 'tracks';
  static primaryKey = 'uuid'

  uuid!: string
  author_id!: string
  author!: Author
  name!: string
  url!: string
  album!: string
  playlists!: Playlist[]

  static fields(): Fields {
    return {
      uuid: this.uid(() => uuid()),
      author_id: this.string(''),
      author: this.belongsTo(Author, 'author_id'),
      name: this.string(''),
      url: this.string(''),
      album: this.string(null).nullable(),
      playlists: this.belongsToMany(Playlist, TrackPlaylist, 'track_id', 'playlist_id')
    }
  }
}
