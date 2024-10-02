import React, { useState } from "react";
import cancel from "../assets/cancel.svg";
import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg"; 

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

const Cart: React.FC<Product> = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isExist, setIsExist] = useState(true);

    const handleCancel = () => {
        setIsExist(false);
    }

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    if (!isExist) {
        return null;
    }

    return (
        <div className="p-6 border-gray-200 bg-white">
            <div className="flex items-center mb-2">
                <div className="text-black font-bold">{item.category}</div>
            </div>

            <div className="flex items-start mb-3 mt-3 gap-3">
                <img
                    src={isChecked ? checked : unchecked}
                    alt={isChecked ? 'Checked' : 'Unchecked'}
                    onClick={toggleCheckbox}
                    className="h-7 w-7"
                    />
                <img 
                    src={item.image ? item.image : "https://via.placeholder.com/300x400?text=Item+1"} 
                    className="w-28 h-28 rounded-sm" />
                <div className="flex-1">
                    <div className="font-medium text-black">{item.title}</div>
                    <div className="text-sm text-gray-500">블랙 / 1개</div>
                    <div className="font-semibold text-black">${item.price}</div>
                </div>
                <img src={cancel} alt="Cancel" className="h-3 w-3 cursor-pointer" onClick={handleCancel} />
            </div>

            <div className="flex space-x-2">
                <button className="flex-grow border rounded-sm bg-white border-gray-400 py-1 px-3 text-sm text-black hover:rounded-sm">옵션변경</button>
                <button className="flex-grow border rounded-sm bg-white border-gray-400 py-2 px-3 text-sm text-black hover:rounded-sm">쿠폰사용</button>
            </div>
        </div>
    );
};

export default Cart;