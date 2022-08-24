import styled from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <Image
          src={`https://static.stadtsalat.de/shop/image/${product.image}`}
          alt={product.name}
        />
        <DetailWrapper>
          <Star fill={product.rating > 0 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 1 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 2 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 3 ? "gold" : "lightgray"} />
          <Star fill={product.rating > 4 ? "gold" : "lightgray"} />
        </DetailWrapper>
        <DetailWrapper>
          <Tag active={product.tags.includes("vegan")}>Vegan</Tag>
          <Tag active={product.tags.includes("glutenfree")}>Glutenfree</Tag>
          <Tag active={product.tags.includes("lactosefree")}>Lactosefree</Tag>
          <Tag active={product.tags.includes("glutenfree")}>Glutenfree</Tag>
        </DetailWrapper>
        <IconWrapper>
          <Button>
            <Location />
          </Button>
          <Button onClick={() => setBookmarked(!bookmarked)}>
            <Like fill={bookmarked ? "grey" : "none"} />
          </Button>
        </IconWrapper>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr;

  border-radius: 10px;
  background-color: hsl(0, 0%, 94%);
  box-shadow: 0px 0px 28px 11px rgba(0, 0, 0, 0.2);
  margin: 40px;
  padding: 40px;
`;

const DetailWrapper = styled.div`
  grid-column: 1/2;
  margin: 10px 0;
  align-items: center;
  display: flex;
  gap: 5px;
`;
const Tag = styled.p`
  font-weight: 700;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.active ? "mediumseagreen" : "darkgrey"};
  color: ${(props) => (props.active ? "white" : "lightgrey")};
  text-decoration: ${(props) => (props.active ? "" : "line-through")};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  grid-column: 3/4;
  grid-row: 1/4;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
`;


const Image = styled.img`
grid-column: 2/3;
grid-row: 1/4;
width: 200px;
`

