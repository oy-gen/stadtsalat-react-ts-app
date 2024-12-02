import styled from "styled-components";
import { useState } from "react";
import { Product } from "../../02_business-domain/product.model";

export default function DescriptionCard({ product }: { product: Product }) {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <>
      <TitleWrapper>
        <h2>{product.name}</h2>
        <button onClick={() => setOpenInfo(!openInfo)}>
          {openInfo ? "close" : "show more info"}{" "}
        </button>
      </TitleWrapper>
      {openInfo && <InfoWrapper>{product.description}</InfoWrapper>}
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  margin-top: 20px;
  height: 60px;
  padding: 0 25px;
  align-items: center;
  border-bottom: 1px solid white;
  _border-radius: 10px 10px 0 0;
`;

const InfoWrapper = styled.div`
  background-color: lightgray;
  border-radius: 0 0 10px 10px;
  padding: 25px;
  margin-bottom: 25px;
  overflow: hidden;
`;
