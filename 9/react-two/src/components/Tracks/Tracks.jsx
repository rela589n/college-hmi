import React from 'react'
import './Tracks.css'

const Tracks = (props) => {


    let addTrack = () => {
        props.addTrack();
    }

    let onTrackChange = () => {
        let text = newTrackElement.current.value;
        props.updateNewTrackChange(text)
    }

    let onAuthorChange = () => {
        let text = newAuthorElement.current.value;
        props.updateNewAuthorChange(text)
    }

    let onUrlChange = () => {
        let text = newUrlElement.current.value;
        props.updateNewUrlChange(text)
    }

    let onAlbumChange = () => {
        let text = newAlbumElement.current.value;
        props.updateNewAlbumChange(text)
    }

    let onPlaylistChange = () => {
        let text = newPlaylistElement.current.value;
        props.updateNewPlaylistChange(text)
    }

    let newTrackElement = React.createRef();
    let newAuthorElement = React.createRef();
    let newUrlElement = React.createRef();
    let newAlbumElement = React.createRef();
    let newPlaylistElement = React.createRef();
    return (
        <div>
            <div>{props.tracks.map(t => (<div>
                <div className='text'>Трек - {t.track}</div>
                <audio controls src={t.url} />
                <div className='text'>Посилання - {t.url}</div>
                <div className='text'>Альбом - {t.album}</div>
                <div className='text'>-----------------------------------</div>
            </div>))}</div>


            <div className='text-padding'>
                <input onChange={onTrackChange} ref={newTrackElement} value={props.newTrackText} type="text"
                       className="text-center" placeholder="Track" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div className='text-padding'>
                <input onChange={onAuthorChange} ref={newAuthorElement} value={props.newAuthorText} type="text"
                       className="text-center" placeholder="Author" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div className='text-padding'>
                <input onChange={onUrlChange} ref={newUrlElement} value={props.newUrlText} type="text"
                       className="text-center" placeholder="Url" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div className='text-padding'>
                <input onChange={onAlbumChange} ref={newAlbumElement} value={props.newAlbumText} type="text"
                       className="text-center" placeholder="Album" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div className='text-padding'>
                <input onChange={onPlaylistChange} ref={newPlaylistElement} value={props.newPlaylistText} type="text"
                       className="text-center" placeholder="Playlist" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <button onClick={addTrack} type="button" className="btn btn-outline-primary">Додати</button>
        </div>

    )
}

export default Tracks;
