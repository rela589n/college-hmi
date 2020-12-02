import React from 'react'
import {connect} from "react-redux";
import Tracks from "./Tracks";
import {
    addTracksAC, updateNewAlbumChangeAC,
    updateNewAuthorChangeAC, updateNewPlaylistChangeAC,
    updateNewTrackChangeAC, updateNewUrlChangeAC
} from "../../redux/track-reducer";

let mapStateToProps = (state) => {
    return {
        tracks: state.tracksPage.tracks,
        newTrackText: state.tracksPage.newTrackText,
        newAuthorText: state.tracksPage.newAuthorText,
        newUrlText: state.tracksPage.newUrlText,
        newAlbumText: state.tracksPage.newAlbumText,
        newPlaylistText: state.tracksPage.newPlaylistText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTrack: () => {
            dispatch(addTracksAC())
        },
        updateNewTrackChange: (text) => {
            let action = updateNewTrackChangeAC(text);
            dispatch(action)
        },
        updateNewAuthorChange: (text) => {
            let action = updateNewAuthorChangeAC(text);
            dispatch(action)
        },
        updateNewUrlChange: (text) => {
            let action = updateNewUrlChangeAC(text);
            dispatch(action)
        },
        updateNewAlbumChange: (text) => {
            let action = updateNewAlbumChangeAC(text);
            dispatch(action)
        },
        updateNewPlaylistChange: (text) => {
            let action = updateNewPlaylistChangeAC(text);
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);