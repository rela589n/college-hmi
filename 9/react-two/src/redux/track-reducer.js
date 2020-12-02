const ADD_TRACK = 'ADD-TRACK';
const UPDATE_NEW_TRACK_TEXT = 'UPDATE-NEW-TRACK-TEXT';
const UPDATE_NEW_AUTHOR_TEXT = 'UPDATE-NEW-AUTHOR-TEXT';
const UPDATE_NEW_URL_TEXT = 'UPDATE-NEW-URL-TEXT';
const UPDATE_NEW_ALBUM_TEXT = 'UPDATE-NEW-ALBUM-TEXT';
const UPDATE_NEW_PLAYLIST_TEXT = 'UPDATE-NEW-PLAYLIST-TEXT';

let initialState = {
    tracks: [
        {
            track: 'new track',
            author: 'new Author',
            url: 'https://holychords.com/uploads/music/20200701/20200701164535_58.mp3',
            album: 'new album',
            playlist: 'new playlist'
        }
    ],
    newTrackText: '',
    newAuthorText: '',
    newUrlText: '',
    newAlbumText: '',
    newPlaylistText: ''
}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRACK: {
            let newTrack = {
                track: state.newTrackText,
                author: state.newAuthorText,
                url: state.newUrlText,
                album: state.newAlbumText,
                playlist: state.newPlaylistText
            }
            return {
                ...state,
                tracks: [...state.tracks, newTrack],
                newTrackText: '',
                newAuthorText: '',
                newUrlText: '',
                newAlbumText: '',
                newPlaylistText: ''
            }
        }
        case UPDATE_NEW_TRACK_TEXT: {
            return {
                ...state,
                newTrackText: action.newTrack
            }
        }
        case UPDATE_NEW_AUTHOR_TEXT: {
            return {
                ...state,
                newAuthorText: action.newAuthor
            }
        }
        case UPDATE_NEW_URL_TEXT: {
            return {
                ...state,
                newUrlText: action.newUrl
            }
        }
        case UPDATE_NEW_ALBUM_TEXT: {
            return {
                ...state,
                newAlbumText: action.newAlbum
            }
        }
        case UPDATE_NEW_PLAYLIST_TEXT: {
            return {
                ...state,
                newPlaylistText: action.newPlaylist
            }
        }
        default :
            return state
    }
}

export const addTracksAC = () => ({type: ADD_TRACK})

export const updateNewTrackChangeAC = (text) => ({
    type: UPDATE_NEW_TRACK_TEXT, newTrack: text
})
export const updateNewAuthorChangeAC = (text) => ({
    type: UPDATE_NEW_AUTHOR_TEXT, newAuthor: text
})
export const updateNewUrlChangeAC = (text) => ({
    type: UPDATE_NEW_URL_TEXT, newUrl: text
})
export const updateNewAlbumChangeAC = (text) => ({
    type: UPDATE_NEW_ALBUM_TEXT, newAlbum: text
})
export const updateNewPlaylistChangeAC = (text) => ({
    type: UPDATE_NEW_PLAYLIST_TEXT, newPlaylist: text
})

export default tracksReducer;
