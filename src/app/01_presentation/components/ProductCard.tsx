import styled from "styled-components";
import Tags from "./Tags";
// @ts-ignore
import { ReactComponent as Like } from "../images/like.svg";
// @ts-ignore
import { ReactComponent as Location } from "../images/location.svg";
import Modal from "./Modal";
import Stars from "./Stars";

import { useDispatch, useSelector } from "react-redux";

import {
  toggleLike,
  toggleModal,
} from "../../03_data-domain/get-stadtsalat-data/reducers/get-stadtsalat-data.slice";
import {
  selectIsModalOpen,
  selectIsProductLiked,
} from "../../02_business-domain/product-selectors.selector";
import { Product } from "../../02_business-domain/product.model";

export default function ProductCard({ product }: { product: Product }) {
  const isLiked: boolean =
    useSelector(selectIsProductLiked(product.id)) ?? false;
  const openModal: boolean = useSelector(selectIsModalOpen) ?? false;
  const dispatch = useDispatch();

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <Image src={product.image.url} alt={product.name} />
        <DetailWrapper>
          <Stars rating={product.rating} />
        </DetailWrapper>
        <DetailWrapper>
          <Tags tags={product.tags} />
        </DetailWrapper>
        <IconWrapper>
          <Button onClick={() => dispatch(toggleModal())}>
            <Location />
          </Button>
          <Button
            onClick={() => {
              dispatch(toggleLike(product.id));
            }}
          >
            <Like fill={isLiked ? "grey" : "none"} />
          </Button>
        </IconWrapper>
      </StyledCard>
      {openModal && (
        <Modal
          name={product.name}
          description={product.description}
          id={product.id}
        />
      )}
    </>
  );
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr;
  border-radius: 10px;
  background-color: hsl(0, 0%, 94%);
  box-shadow: 0 0 28px 11px rgba(0, 0, 0, 0.2);
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
