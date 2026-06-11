import { useState } from "react";
import Error from "./common/error";
import Loader from "./common/loader";
import ProductGrid from "./product-grid";
import Cart from "./cart";

function ProductListPresenter({
    loading,
    error,
    products,
    cart,
    updateCart,
    addToCart,
    removeItem,
}) {
    if (error) return <Error {...error} />;
    if (loading) return <Loader {...loading} />;
    const [cartOpen, setCartOpen] = useState(false);
    function toggleCart() {
        setCartOpen((prev) => !prev);
    }
    return (
        <div className="bg-amber-100 max-w-384 mx-auto w-full relative">
            <ProductGrid
                products={products}
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}
            />
            <Cart
                open={cartOpen}
                toggleCart={toggleCart}
                cart={cart}
                updateCart={updateCart}
            />
        </div>
    );
}

export default ProductListPresenter;
