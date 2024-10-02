// src/components/MainContent.tsx
import React from "react";
import "../styles/MainContent.css";
import CardGrid from "./CardGrid";

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
  return (
    <main className="main-content">
      <CardGrid></CardGrid>
    </main>
  );
};

export default MainContent;
