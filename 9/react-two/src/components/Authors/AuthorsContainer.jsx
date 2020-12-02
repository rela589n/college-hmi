import React from 'react'
import {connect} from "react-redux";
import Authors from "./Authors";

let mapStateToProps = (state) => {
    return {
        tracks: state.tracksPage.tracks
    }
}

let mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors);