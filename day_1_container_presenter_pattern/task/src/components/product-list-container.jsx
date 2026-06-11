import axios from "axios";
import { useEffect, useState } from "react";
import ProductListPresenter from "./product-list-presenter";

function ProductListContainer({ userId }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    async function fetchProductCart() {
        try {
            setLoading({ message: "Loading product list..." });
            const products = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/products`
            );
            setProducts(products.data);
            const cart = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/cart/`
            );
            const alteredCart = cart.data.map((cartItem) => {
                const product = products.data.filter(
                    (prod) => prod.id === cartItem.productId
                );
                return { ...cartItem, productDetail: product[0] };
            });
            setCart(alteredCart);
            setLoading(null);
        } catch (e) {
            setLoading(null);
            setError({ title: "Products fetching failed", message: e.message });
        }
    }
    async function fetchCart() {
        try {
            setLoading({ message: "Loading cart..." });
            const cart = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/cart/`
            );
            const alteredCart = cart.data.map((cartItem) => {
                const product = products.filter(
                    (prod) => prod.id === cartItem.productId
                );
                return { ...cartItem, productDetail: product[0] };
            });
            setCart(alteredCart);
            setLoading(null);
        } catch (e) {
            setLoading(null);
            setError({ title: "Cart fetching failed", message: e.message });
        }
    }
    async function updateCart(itemId, quantity) {
        const cartDetail = cart.filter((ci) => ci.id === itemId)[0];
        if (quantity === 0) {
            await axios.delete(
                `${import.meta.env.VITE_API_BASE_URL}/cart/${itemId}`
            );
            await fetchCart();
        }
        const res = await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/cart/${itemId}`,
            { productId: cartDetail.productId, quantity, userId }
        );
    }
    async function addToCart(productId) {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/cart/`, {
            productId,
            quantity: 1,
            userId,
        });
        await fetchCart();
    }
    async function removeItem(productId) {
        const cartDetail = cart.filter((ci) => ci.productId === productId)[0];
        await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/cart/${cartDetail.id}`
        );
        await fetchCart();
    }
    useEffect(() => {
        fetchProductCart();
    }, []);
    return (
        <ProductListPresenter
            error={error}
            loading={loading}
            products={products}
            cart={cart}
            updateCart={updateCart}
            addToCart={addToCart}
            removeItem={removeItem}
        />
    );
}

export default ProductListContainer;
