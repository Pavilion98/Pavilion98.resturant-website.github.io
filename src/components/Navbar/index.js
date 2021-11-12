import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './Navbar.styles';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/"> Foodly </NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>   
        </>
    )
}

export default Navbar;
