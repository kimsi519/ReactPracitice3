import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="w-32 p-1 text-black flex flex-col rounded-lg hover:bg-gray-100 hover:cursor-pointer hover:text-black"
    >
      <img className="w-32 h-32" src={product.image} alt={product.title} />
      <div>
        <h3 className="text-sm font-semibold text-start">{product.category}</h3>
        <p className="uppercase text-start text-overflow">{product.title}</p>
        <p className="font-bold text-start">${product.price}</p>
        <p className="text-xs text-red-600 text-start">
          ❤️{product.rating.count}
        </p>
      </div>
    </Link>
  );
};

const CardGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full flex flex-wrap space-y-4">
      {products.length > 0 ? (
        products.map((product) => <Card product={product}></Card>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardGrid;
