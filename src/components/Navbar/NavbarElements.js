import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
    

`;


export const NavLogo= styled(LinkRouter)`
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
  font-size: 2rem;
  display: flex;
  margin-left: 50px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    transform: translate(-100%, 60%);
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2.3rem;

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }  
`;


export const NavItem = styled.li `
    padding-right:30px;
    padding-top: 8px;
    height: 70px;
`;

export const NavLink = styled(LinkScroll)`
    color: #fff;
    text-shadow: 2px 2px 4px #000000;
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        border-bottom: 3px solid yellow;
    }
`;