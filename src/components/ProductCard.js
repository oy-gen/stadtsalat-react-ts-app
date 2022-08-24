import { useEffect, useState } from "react";
import styled from "styled-components";
import getRandomRating from "../hooks/getRandomRating";
import { ReactComponent as Star } from "../images/star.svg";

export default function ProductCard({ product }) {
  const [rating, setRating] = useState(5);
  useEffect(() => {
    setRating(getRandomRating());
  }, []);

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <p>{rating}</p>
        <RatingWrapper>
          <Star fill={rating > 0 ? "gold" : "lightgray"} />
          <Star fill={rating > 1 ? "gold" : "lightgray"} />
          <Star fill={rating > 2 ? "gold" : "lightgray"} />
          <Star fill={rating > 3 ? "gold" : "lightgray"} />
          <Star fill={rating > 4 ? "gold" : "lightgray"} />
        </RatingWrapper>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  gap: 40px;
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
