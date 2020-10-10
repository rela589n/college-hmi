import VuexORM from '@vuex-orm/core'
import database from '@/database'
import Track from "~/models/Track";
import Author from "~/models/Author";
import {Store} from "vuex";
import Playlist from "~/models/Playlist";
import data from "~/data"

export const plugins = [
  VuexORM.install(database)
]

export const mutations = {}

export interface CreateTrackDto {
  name: string
  author: string
  url: string
  album: string
  playlist: string
}

export const actions = {
  nuxtServerInit() {
    data()
      .then(
        data => Track.insert({data})
      );
  },
  async createTrack(context: Store<any>, {dto}: { dto: CreateTrackDto }) {
    let author: Author = await context.dispatch('findOrCreateAuthor', {name: dto.author});
    let playlist: Playlist = await context.dispatch('findOrCreatePlayList', {name: dto.playlist});

    await Track.insert({
      data: {
        name: dto.name,
        author: author,
        playlists: [playlist],
        album: dto.album,
        url: dto.url,
      }
    })
  },
  async findOrCreateAuthor(context: Store<any>, {name}: { name: string }) {
    let author: Author | null = context.getters.authorByName(name);

    if (null === author) {
      await Author.insert({
        data: {name}
      })

      return context.getters.authorByName(name)
    }

    return author;
  },

  async findOrCreatePlayList(context: Store<any>, {name}: { name: string }){
    if (name.length === 0) {
      return Playlist
        .query()
        .where('name', 'Default')
        .first();
    }

    let playlist: Playlist|null = context.getters.playlistByName(name);

    if (null === playlist) {
      await Playlist.insert({
        data: {name}
      })

      return context.dispatch('findOrCreatePlayList', {name});
    }

    return playlist;
  }
}

export const getters = {
  authorByName: (state: any, getters: any) => (name: string) => {
    return Author.query()
      .where('name', name)
      .first();
  },
  playlistByName: (state: any, getters: any) => (name: string) => {
    return Playlist.query()
      .where('name', name)
      .first()
  }
}

// https://cf-media.sndcdn.com/JOvOD991dtem.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSk92T0Q5OTFkdGVtLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MDIzNTc3NTB9fX1dfQ__&Signature=H4bB3wnVWtLEUP~aejvenmpYOr3gr1Gro~7f201M0HMu1AVn2IvOCAETX--Fqss5dfJa~Dk2j5ugtIIIn5R8eW6jzgZZnpVRaysAbFVxLovsogbxjKwWEG7~W-JAqLXS3yZ9tkTynMDBK1daxCCc0YfT6BMEgotOz2HDjsQJ3elcomC4S42A8UIf--mnsaFM-9gSlfNriU7Rf8ZgY3QwDREU6zrXg8bI0AtD1NPMkGeztTr~5UThc4UYrH0wOboOQ7yqo6VwWxY2klTmWpylg80SADJJuSwJq1UWHk~kQ0WUF8tnSoUJqLbOus1AWsZ84IIdSlIqeQuYZFu87s5DCA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ
//  http://mp3ritm.top/download.php?id=92389
// http://cd.textfiles.com/10000gp2/500SNDS/SNORT.WAV
