import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    setCurrentIndex(currentIndex - 1);
  }
  function goToNext() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <ImageFrame>
        <Arrow
          className="left"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          🡨
        </Arrow>
        <Arrow
          className="right"
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
        >
          🡪
        </Arrow>
        <Image
          style={{
            backgroundImage: `url(${images[currentIndex].url})`,
          }}
        />
        <DotWrapper>
          {images.map((image, index) => (
            <Dot
              key={index}
              currentPic={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </DotWrapper>
      </ImageFrame>
    </>
  );
}

const ImageFrame = styled.div`
  position: relative;
  height: 100%;
`;

const Image = styled.div`
  background-size: cover;
  background-color: black;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const DotWrapper = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
  gap: 10px;
`;

const Dot = styled.button`
  border-style: none;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.currentPic ? "lightgrey" : "grey")};
  :hover {
    background-color: green;
  }
`;

const Arrow = styled.button`
  font-size: 45px;
  color: black;
  position: absolute;
  top: 45%;
  z-index: 1;
  &.left {
    left: 5px;
  }
  &.right {
    right: 5px;
  }
`;
