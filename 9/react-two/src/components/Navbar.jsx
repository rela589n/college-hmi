import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className='navbar-brand'>
            Music App
        </div>

        <ul className='navbar-nav'>
                <NavLink className='nav-link' to='tracks' exact>Всі треки</NavLink>
                <NavLink className='nav-link' to='playlist' exact>Плейлист</NavLink>
                <NavLink className='nav-link' to='author' exact>Виконавці</NavLink>
        </ul>
    </nav>
)

export default Navbar;