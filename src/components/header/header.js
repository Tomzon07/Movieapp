import React from 'react';
import {NavLink} from "react-router-dom"
import user from "../../images/user.png"
import "./header.scss";
import movie from "../../images/1.png"

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/">
            {/* <div className='logo'>Movie App</div> */}
            <img src={movie} alt="logo"  className='logo' />
            </NavLink>
            <div className='user-image'>
                <img src={user} alt="user"  style={{cursor:"pointer"}}/> 
            </div>
            
        </div>
    );
};

export default Header;