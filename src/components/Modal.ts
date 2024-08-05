import ReactDOM from "react-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../app/dataSlice";

export default function Modal({ description, name }) {
  const dispatch = useDispatch();
  const content = (
    <ModalUnderlay>
      <ModalContent>
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={() => dispatch(toggleModal(false))}>
          close modal
        </button>
      </ModalContent>
    </ModalUnderlay>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
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
