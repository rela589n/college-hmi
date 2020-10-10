import {Model} from "@vuex-orm/core"
import Fields from "@vuex-orm/core/lib/model/contracts/Fields";

export default class TrackPlaylist extends Model {
  static entity: string = 'track_playlist'
  static primaryKey = ['track_id', 'playlist_id'];

  static fields(): Fields {
    return {
      'track_id': this.string(''),
      'playlist_id': this.string(''),
    }
  }
}
