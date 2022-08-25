import Nav from "../components/Nav";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";

export default function PageOne() {
  return (
    <>
      <Nav />
      <MainContainer>
        <h3>This is Page One</h3>;
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  max-width: 1200px;
  margin: 180px auto;
`;
