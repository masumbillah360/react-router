import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;