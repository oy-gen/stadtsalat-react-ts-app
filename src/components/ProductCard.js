import styled from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

export default function ProductCard({ product }) {
  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <RatingWrapper>
          <Star fill={product.rating > 0 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 1 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 2 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 3 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 4 ? "gold" : "lightgray"} />
        </RatingWrapper>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  padding: 40px;
  border: 0.5px solid lightgrey;
  gap: 40px;
`;

const RatingWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 5px;
`;
