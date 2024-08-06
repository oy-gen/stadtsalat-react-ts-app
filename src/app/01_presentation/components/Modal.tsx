import ReactDOM from "react-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../03_data-domain/get-stadtsalat-data/reducers/get-stadtsalat-data.slice";

export default function Modal({ description, name, id }: any) {
  const dispatch = useDispatch();
  const modal = document.getElementById("modal");
  const content = (
    <ModalUnderlay>
      <ModalContent>
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={() => dispatch(toggleModal(id))}></button>
      </ModalContent>
    </ModalUnderlay>
  );
  return modal && ReactDOM.createPortal(content, modal);
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem 1rem;
  background: white;
  max-width: 800px;
  padding: 5rem 1rem;
`;

const ModalUnderlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;
