import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchData from "../app/fetchData";
import { Link } from "react-router-dom";
import { setProducts, setImages, selectProducts } from "../app/dataSlice";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";

export default function Header() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    fetchData().then((products) => dispatch(setProducts(products)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setImages(products));
  }, [products, dispatch]);

  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo src="https://static.stadtsalat.de/shop/image/configurator" />
        </Link>
        <MenueWrapper>
          <Link to="/page-one">PAGE ONE</Link>
          <Link to="/page-two">PAGE TWO</Link>
        </MenueWrapper>
      </NavBar>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
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
