import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}
const Women: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("상품을 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        // "women's clothing"에서 5개, "men's clothing"에서 4개 필터링
        const womenProducts = data
          .filter((product: Product) => product.category === "women's clothing")
          .slice(0, 6);
        const menProducts = data
          .filter((product: Product) => product.category === "men's clothing")
          .slice(1, 4)
          .map((product) => ({
            ...product,
            title: product.title.replace(/Mens/g, ""), //
          }));
        const clothingProducts = [...womenProducts, ...menProducts];
        setProducts(clothingProducts);
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
  const formatPrice = (price: number): string => {
    // 가격을 정수로 변환하고 3자리마다 콤마 추가
    return (
      Math.floor(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ",000"
    );
  };
  return (
    <div style={styles.grid}>
      {products.map((product) => {
        const hasDiscount = Math.random() < 0.4;
        const discount = hasDiscount ? Math.floor(Math.random() * 50) + 1 : 0; // 1%에서 50% 사이의 랜덤 값
        return (
          <div key={product.id} style={styles.product}>
            <div style={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.image}
              />
            </div>
            <h3 style={styles.title}>{product.title}</h3>
            <div style={styles.priceContainer}>
              {hasDiscount && <p style={styles.discount}>{discount}%</p>}
              <p style={styles.price}>{formatPrice(product.price)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "10px",
  },
  product: {
    margin: "10px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
  },
  imageContainer: {
    width: "200px", // 정사각형 크기 설정
    height: "200px", // 정사각형 크기 설정
    overflow: "hidden", // 오버플로우 숨기기
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // 비율을 유지하며 맞추기
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // 중앙 정렬
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
export default Women;