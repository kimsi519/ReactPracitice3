// src/components/MainContent.tsx
import React from "react";
import KeyVisual from "./KeyVisual";
import "../styles/MainContent.css";
import CardGrid from "./CardGrid";

import Nike01 from "../assets/nike_01.png";
import Nike02 from "../assets/nike_02.png";
import Addidas01 from "../assets/addias_01.png";
import Bitter01 from "../assets/bitter_01.png";
import Bitter02 from "../assets/bitter_02.png";

// 일단 주석으로 놔둘게요!!
// interface ImageData {
//   id: number,
//   title: string,
//   price: string,
//   category: string,
//   description: string,
//   image: string
// }

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "패션 아이템 1",
    price: 50000,
    imageUrl: "https://via.placeholder.com/300x400?text=Item+1",
  },
  {
    id: 2,
    name: "패션 아이템 2",
    price: 75000,
    imageUrl: "https://via.placeholder.com/300x400?text=Item+2",
  },
  // 더미 데이터 추가
];

const MainContent: React.FC = () => {
  // 이미지 불러오기; 5개 제한
  // const [images, setImages] = useState<ImageData[]>([]);

  // useEffect(() => {
  //   // API에서 데이터를 가져오는 비동기 함수
  //   const fetchImages = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products?limit=5');
  //     const data: ImageData[] = await response.json();
  //     setImages(data);
  //   };

  //   fetchImages();
  // }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  const definedImages = [Nike01, Nike02, Addidas01, Bitter01, Bitter02];

  return (
    <main className="mb-10 main-content">
      {/* 이미지 캐러셀 */}
      <div style={{ width: '700px', margin: '0'}} className="mb-10">
        {definedImages.length > 0 ? (
          <KeyVisual images={definedImages} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <h2>신상품</h2>
      <div className="mt-10 product-grid">
        {sampleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">
              {product.price.toLocaleString()}원
            </p>
          </div>
        ))}
      </div>

      <CardGrid></CardGrid>
    </main>
  );
};

export default MainContent;
