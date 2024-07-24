// 이미지 슬라이드 기능
import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  border-radius: 15px;
  //마우스 올렸을때만 화살표 나오게(pc버전)
  &:hover .arrow-button {
    opacity: 1;
  }
  //모바일 버전에서는 항상 화살표 나오게
  @media (max-width: 768px) {
    .arrow-button {
      opacity: 1;
      display: block;
    }
  }
`;

const SliderImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const PrevButton = styled(ArrowButton)`
  left: 5px;
  ${(props) => !props.show && "display: none;"}//하단 show 조건이 아니면 숨기기
`;

const NextButton = styled(ArrowButton)`
  right: 5px;
  ${(props) => !props.show && "display: none;"}//하단 show 조건이 아니면 숨기기
`;

const ImageSlider = ({
  imageUrls,
  currentIndex,
  setCurrentIndex,
  size = 111,
}) => {
  //이전 버튼 클릭시 이전 이미지로
  const handlePrevClick = (event) => {
    event.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };
  //다음 버튼 클릭시 다음 페이지로
  const handleNextClick = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <SliderContainer size={size}>
      <SliderImage imageUrl={imageUrls[currentIndex]} />
      {imageUrls.length > 1 && (
        <>
          <PrevButton
            className="arrow-button"
            //현재 이미지가 첫번째일때, 모바일버전일때 show 상태(버튼보여주기)
            show={currentIndex > 0 || window.innerWidth <= 768}
            onClick={handlePrevClick}
          >
            &lt;
          </PrevButton>
          <NextButton
            className="arrow-button"
            //현재 이미지가 마지막이 아닐때, 모바일버전일때 show 상태(버튼보여주기)
            show={
              currentIndex < imageUrls.length - 1 || window.innerWidth <= 768
            }
            onClick={handleNextClick}
          >
            &gt;
          </NextButton>
        </>
      )}
    </SliderContainer>
  );
};

export default ImageSlider;
