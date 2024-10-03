import React from "react";
import Slider from 'react-slick';

// interface ImageData {
//     id: number,
//     title: string,
//     price: string,
//     category: string,
//     description: string,
//     image: string
// }

interface KeyVisualProps {
    // images: ImageData[];
    images: string[];
  }
  
  const KeyVisual: React.FC<KeyVisualProps> = ({ images }) => {
    const settings = {
      dots: true, // 하단 점 표시
      infinite: true, // 무한 루프
      speed: 500, // 애니메이션 속도
      slidesToShow: 1, // 한 번에 보여질 슬라이드 수
      slidesToScroll: 1, // 스크롤 시 이동할 슬라이드 수
      autoplay: true, // 자동 재생
      autoplaySpeed: 6000, // 자동 재생 속도 (ms)
      arrows: true, // 좌우 화살표 표시
    };
  
    return (
      <div>
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <div key={index}>
              <img src={imgSrc} alt={`Slide ${index + 1}`} style={{ width: '700px', height: '700px' }} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default KeyVisual;