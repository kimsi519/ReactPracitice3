import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

function ShoppingCart() {
    const [products, getProducts] = useState<Product[]>([]);
    const data: Product[] = [];

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
        getProducts(jsonData);
    };

    const addProduct = (product: Product) => {
        data.push(product);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <p>shopping cart</p>
            <Cart items={products} />
        </div>
    )
}

export default ShoppingCart;