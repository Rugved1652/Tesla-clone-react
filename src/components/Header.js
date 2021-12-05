import React, { useState } from "react";
import styled from "styled-components";
import { Menu as MenuIcon, Close } from "@material-ui/icons";
import {selectcars} from "../features/car/carSlice"
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars = useSelector(selectcars);

  console.log(cars)
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="tesla" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>  
            <a key={index} href="/">{car}</a>
        )}
        
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu> 
      <BurgerNav show={burgerStatus}>
        <Closewrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </Closewrapper>

        <ul>
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-In</a>
          </li>
          <li>
            <a href="/">Test-drive</a>
          </li>
          <li>
            <a href="/">Cybertruck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
          <li>
            <a href="/">Semi</a>
          </li>
          <li>
            <a href="/">Charging</a>
          </li>
          <li>
            <a href="/">Powerwall</a>
          </li>
          <li>
            <a href="/">Commercial Energy</a>
          </li>
          <li>
            <a href="/">Utilities</a>
          </li>
          <li>
            <a href="/">Find Us</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Investor relation</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: nowrap;
  }
  @media (max-width: 788px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 8px;
  }
  `;

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    list-style: none;
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(Close)`
  cursor: pointer;
`;
const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
