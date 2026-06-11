import CartItem from "./cart-item";

function Cart({ open, toggleCart, cart, updateCart }) {
    return (
        <>
            {!open ? (
                <button
                    type="button"
                    onClick={toggleCart}
                    className="absolute bottom-2 right-2 bg-amber-500 p-4 rounded-sm"
                >
                    Cart
                </button>
            ) : (
                <div className="absolute top-0 right-0 h-screen z-50 overflow-x-hidden overflow-y-auto bg-amber-300 w-1/3 flex flex-col justify-start items-start gap-4 p-4 m-0">
                    <button
                        type="button"
                        onClick={toggleCart}
                        className="text-sm bg-red-500 text-white font-medium rounded-sm p-2 cursor-pointer outline-hidden"
                    >
                        Close
                    </button>
                    {cart.length > 0 ? (
                        cart.map((cartItem, idx) => (
                            <CartItem
                                key={idx}
                                {...cartItem}
                                updateCart={updateCart}
                            />
                        ))
                    ) : (
                        <p className="text-lg text-center w-full">
                            Cart is empty
                        </p>
                    )}
                </div>
            )}
        </>
    );
}

export default Cart;
