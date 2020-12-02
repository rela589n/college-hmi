import React from 'react'
import './Playlists.css'

const Playlists = (props) => {
    return (
        <div className='container px-lg-4'>
            <strong>Список плейлистів</strong>
            {props.tracks.map(p => (<div>
                <div className='text'>{p.playlist}</div>
            </div>))}
        </div>
    )
}

export default Playlists;