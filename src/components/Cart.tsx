import React, { useState, useEffect } from "react";
import cancel from "../assets/cancel.svg";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

interface CartProps {
    items: Product[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
    const handleCancel = () => {
        
    }

    console.log('여기')
    console.log(items);
    return (
        items.map((item) => (

    <div className="p-4 border-gray-200">
        <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2 border-gray-400 rounded" />
            <div>{item.title}</div>
        </div>

        <div className="flex items-start mb-2">
            <input type="checkbox" className="mr-2" />
            <img 
                src={item.image ? item.image : "https://via.placeholder.com/300x400?text=Item+1"} 
                alt={item.title} 
                className="h-20 w-20 object-cover mr-4" />
            <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500">브라운 / 1개</div>
                <div className="font-semibold">${item.price}</div>
            </div>
            <img src={cancel} alt="Cancel" className="h-3 w-3 cursor-pointer" onClick={handleCancel} />
        </div>

        <div className="flex space-x-2">
            <button className="flex-grow border rounded-sm bg-white border-gray-400 py-1 px-3 text-sm text-black">옵션변경</button>
            <button className="flex-grow border rounded-sm bg-white border-gray-400 py-2 px-3 text-sm text-black">쿠폰사용</button>
        </div>
    </div>
        ))
  );
};

export default Cart;