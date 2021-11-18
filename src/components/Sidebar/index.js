import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './sidebar.styles';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"> Speciality </SidebarLink>
                <SidebarLink to="/"> Popular </SidebarLink>
                <SidebarLink to="/"> Featured </SidebarLink>
                <SidebarLink to="/"> Review </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/"> Order Now </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
