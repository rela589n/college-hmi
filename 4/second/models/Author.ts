import Track from "~/models/Track"
import {Model} from '@vuex-orm/core'
import {v4 as uuid} from "uuid"
import Fields from "@vuex-orm/core/lib/model/contracts/Fields";

export default class Author extends Model {
  static entity: string = 'authors'
  static primaryKey = 'uuid'

  uuid!: string
  name!: string
  tracks!: Track[]

  static fields(): Fields {
    return {
      uuid: this.uid(() => uuid()),
      name: this.string(''),
      tracks: this.hasMany(Track, 'author_id'),
    }
  }

  toString(): string {
    return this.name
  }
}
