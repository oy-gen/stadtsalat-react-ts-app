import styled from "styled-components";
import Tags from "./Tags";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { useState } from "react";
import Modal from "./Modal";
import Stars from "./Stars";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <Image
          src={`https://static.stadtsalat.de/shop/image/${product.image}`}
          alt={product.name}
        />
        <DetailWrapper>
          <Stars rating={product.rating} />
        </DetailWrapper>
        <DetailWrapper>
          <Tags tags={product.tags} />
        </DetailWrapper>
        <IconWrapper>
          <Button onClick={() => setShowModal(!showModal)}>
            <Location />
          </Button>
          <Button onClick={() => setLiked(!liked)}>
            <Like fill={liked ? "grey" : "none"} />
          </Button>
        </IconWrapper>
      </StyledCard>
      <Modal onClick={() => setShowModal(false)} showModal={showModal}>
        <h2>{product.name}</h2>
        <Message>{product.description}</Message>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </Modal>
    </>
  );
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr;
  border-radius: 10px;
  background-color: hsl(0, 0%, 94%);
  box-shadow: 0px 0px 28px 11px rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 40px;
`;

const DetailWrapper = styled.div`
  grid-column: 1/2;
  margin: 10px 0;
  align-items: center;
  display: flex;
  gap: 5px;
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
`;

const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 1rem;
  text-align: center;
`;
