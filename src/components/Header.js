import styled from "styled-components";
import { ReactComponent as Burger } from "./burger.svg";

export default function Header() {
  return (
    <HeaderBar>
      <Burger height="60px" />
      <MenueWrapper>
        <h5>PAGE 1</h5>
        <h5>PAGE 2</h5>
        <h5>PAGE 3</h5>
      </MenueWrapper>
    </HeaderBar>
  );
}
const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  padding: 0 80px;
  position: fixed;
  height: 100px;
  width: 100%;
  background-color: aliceblue;
  justify-content: space-between;
  z-index: 1;
`;

const MenueWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

// const Logo = styled.img``
