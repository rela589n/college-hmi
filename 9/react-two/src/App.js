import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import {Route} from "react-router";
import PlaylistsContainer from "./components/Playlists/PlaylistsContainer";
import TracksContainer from "./components/Tracks/TracksContainer";
import AuthorsContainer from "./components/Authors/AuthorsContainer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className='container px-lg-4'>
                <Route path='/playlist' render={() => <PlaylistsContainer/>}/>
                <Route path='/tracks' render={() => <TracksContainer/>}/>
                <Route path='/author' render={() => <AuthorsContainer/>}/>
            </div>
        </div>
    )
};

export default App;
