import React, { useState } from 'react';
import { Nav, NavLogo, MobileIcon, Bars, NavMenu, NavItem, NavLink } from './NavbarElements';
import '../../App.css';


const Navbar = ({ toggle }) => {
    const [colorChange, setColorChange] = useState(false);

    const changeColorOnScroll = () => {
        if(window.scrollY > 0) {
            setColorChange(true);
        }
        else{
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeColorOnScroll);

    return (
        <>
            <Nav className= {colorChange ? 'navbar color-change' : "navbar"}>
                <NavLogo to="/"> Foodly </NavLogo>
                <MobileIcon onClick={toggle}>
                    <Bars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="speciality"> Speciality </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="popular"> Popular </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="featured"> Featured </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="review"> Review </NavLink>
                    </NavItem>
                </NavMenu>
            </Nav>   
        </>
    )
}

export default Navbar;
