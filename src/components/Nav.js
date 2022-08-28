import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <NavBar>
      <Link to="/">
        <Logo src="https://static.stadtsalat.de/shop/image/configurator" />
      </Link>
      <MenueWrapper>
        <Link to="/page-one">PAGE ONE</Link>
        <Link to="/page-two">PAGE TWO</Link>
      </MenueWrapper>
    </NavBar>
  );
}

const NavBar = styled.header`
  display: flex;
  align-items: center;
  top: 0;
  padding: 0 80px;
  position: fixed;
  height: 120px;
  width: 100%;
  background-color: oldlace;
  justify-content: space-between;
  z-index: 1;
  box-shadow: 0px 0px 28px 11px rgba(0, 0, 0, 0.1);
`;

const MenueWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px; ;
`;
