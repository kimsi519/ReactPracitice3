import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import EmptyCart from "../components/EmptyCart";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

interface ProuductProps {
    item: Product;
}

const ShoppingCart: React.FC<ProuductProps> = () => {
    const [products, getProducts] = useState<Product[]>([]);
    const data: Product[] = [];
    const [isEmpty, setIsEmpty] = useState(false);

    const getData = async() => {
        const json = await (
            await fetch(`https://fakestoreapi.com/products`)
        ).json();
        console.log(json.length);
        const jsonData = json.slice(0, 10);
        jsonData.map((item: Product) => {
            addProduct({
                id: item.id,
                title: item.title,
                price: item.price,
                category: item.category,
                image: item.image
            })
        })
        console.log(jsonData);
        if (jsonData.isEmpty) {
            setIsEmpty(!isEmpty);
        }
        getProducts(jsonData);
    };

    const addProduct = (product: Product) => {
        data.push(product);
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    }, [products])

    return (
        <div>
            <p>장바구니</p>
            {isEmpty ? <EmptyCart /> : products.map((product) => { return <Cart item={product} />})
            } 
        </div>
    )
}

export default ShoppingCart;