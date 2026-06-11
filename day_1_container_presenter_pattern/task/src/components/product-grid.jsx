import ProductCard from "./product-card";

function ProductGrid({ products, cart, addToCart, removeItem }) {
    return (
        <div className="w-full p-4 space-y-8 h-screen overflow-auto">
            <h1 className="text-2xl font-medium text-center">Our Products</h1>
            <div className="w-full grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        addToCart={addToCart}
                        removeItem={removeItem}
                        inCart={
                            cart.filter((ci) => ci.productId === product.id)
                                .length !== 0
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;
