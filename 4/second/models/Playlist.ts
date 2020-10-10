import {Model} from "@vuex-orm/core"
import Track from "~/models/Track"
import {v4 as uuid} from "uuid"
import TrackPlaylist from "~/models/TrackPlaylist";
import Fields from "@vuex-orm/core/lib/model/contracts/Fields";

export default class Playlist extends Model {
  static entity: string = 'playlists'
  static primaryKey = 'uuid'

  uuid!: string
  name!: string
  tracks!: Track[]

  static fields(): Fields {
    return {
      uuid: this.uid(() => uuid()),
      name: this.string(''),
      tracks: this.belongsToMany(Track, TrackPlaylist, 'playlist_id', 'track_id'),
    }
  }
}
