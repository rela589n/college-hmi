import React from 'react'
import './Authors.css'

const Authors = (props) => {
    return (
        <div className='container px-lg-4'>
            <strong>Список авторів</strong>
            {props.tracks.map(a => (<div>
                <div className='text'>{a.author}</div>
            </div>))}
        </div>
    )
}

export default Authors;