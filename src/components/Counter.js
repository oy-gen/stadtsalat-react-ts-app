import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <Row>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <h1>{count}</h1>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Row>
      <Row>
        <Button onClick={() => dispatch(incrementAsync(1))}>
          Add Async + 1
        </Button>
      </Row>
    </div>
  );
}

const Button = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
