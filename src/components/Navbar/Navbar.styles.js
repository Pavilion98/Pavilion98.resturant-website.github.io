import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    font-weight: 600;
`;


export const NavLink = styled(Link)`
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
  &:hover {
    color: #e9ba23;
  }
`;


export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  
  p {
    transform: translate(-175%, 100%);
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px #000000;
  }
  &:hover {
    color: #e9ba23;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;