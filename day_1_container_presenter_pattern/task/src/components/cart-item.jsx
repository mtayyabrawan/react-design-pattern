import { useEffect, useState } from "react";

function CartItem({ id, quantity, productId, productDetail, updateCart }) {
    const [quant, setQuant] = useState(quantity);
    useEffect(() => {
        updateCart(id, quant);
    }, [quant]);
    return (
        <div className="w-full p-2 bg-amber-100 rounded-md flex gap-4 flex-col">
            <img
                src={productDetail.imageUrl}
                alt={productDetail.name}
                className="aspect-3/2 rounded-sm object-cover"
            />
            <p>{productDetail.name}</p>
            <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                    <p className="flex justify-center items-center">
                        {quant} X {productDetail.price}$ ={" "}
                        {Math.round(productDetail.price * quant)}$
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setQuant(0);
                        }}
                        className="p-2 bg-red-500 text-sm rounded-sm text-white cursor-pointer outline-hidden"
                    >
                        Remove Item
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        disabled={quant === 1}
                        onClick={() => {
                            setQuant((prev) => prev - 1);
                        }}
                        className="bg-gray-500 py-1 px-4 text-white font-medium cursor-pointer outline-hidden rounded-sm"
                    >
                        -
                    </button>
                    <div className="bg-gray-400 py-1 px-4 text-white font-medium w-full text-center">
                        {quant}
                    </div>
                    <button
                        type="button"
                        disabled={productDetail.stock - quant <= 0}
                        onClick={() => {
                            setQuant((prev) => prev + 1);
                        }}
                        className="bg-gray-500 py-1 px-4 text-white font-medium cursor-pointer outline-hidden rounded-sm"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
