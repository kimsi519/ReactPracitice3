import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const SHOES: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (err) {
        setError("상품을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.grid}>
      {products.slice(26, 34).map((product) => {
        const hasDiscount = Math.random() < 0.5;
        const discount = hasDiscount ? Math.floor(Math.random() * 50) + 1 : 0; // 1%에서 50% 사이의 랜덤 값

        return (
          <div key={product.id} style={styles.product}>
            <img
              src={product.images[0]}
              alt={product.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{product.title}</h3>
            <div style={styles.priceContainer}>
              {hasDiscount && <p style={styles.discount}>{discount}%</p>}
              <p style={styles.price}>{product.price.toLocaleString()},000</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 한 줄에 4개 제품
    gap: "10px", // 제품 간의 간격
    margin: "10px",
  },
  product: {
    padding: "10px",
    textAlign: "center",
    overflow: "hidden", // 오버플로우 숨기기
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  title: {
    textAlign: "left",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    height: "80px",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  discount: {
    color: "red",
    fontWeight: "bold",
    textAlign: "left",
    marginRight: "10px",
  },
  price: {
    textAlign: "right",
    flex: "1 0 auto",
  },
};

export default SHOES;
