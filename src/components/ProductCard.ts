import styled from "styled-components";
import Tags from "./Tags";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as Location } from "../images/location.svg";
import Modal from "./Modal";
import Stars from "./Stars";
import {
  toggleLike,
  toggleModal,
  selectLikes,
  selectModal,
} from "../app/dataSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const { name, id, description, rating, tags, image } = product;
  const isLiked = useSelector(selectLikes).includes(id);
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal) === id;

  return (
    <>
      <StyledCard>
        <h2>{name}</h2>
        <Image
          src={`https://static.stadtsalat.de/shop/image/${image}`}
          alt={name}
        />
        <DetailWrapper>
          <Stars rating={rating} />
        </DetailWrapper>
        <DetailWrapper>
          <Tags tags={tags} />
        </DetailWrapper>
        <IconWrapper>
          <Button onClick={() => dispatch(toggleModal(id))}>
            <Location />
          </Button>
          <Button
            onClick={() => {
              dispatch(toggleLike(id));
            }}
          >
            <Like fill={isLiked ? "grey" : "none"} />
          </Button>
        </IconWrapper>
      </StyledCard>
      {openModal && <Modal name={name} description={description} id={id} />}
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
