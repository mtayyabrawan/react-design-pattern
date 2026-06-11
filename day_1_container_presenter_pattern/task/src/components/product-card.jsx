function ProductCard({
    id,
    name,
    description,
    price,
    originalPrice,
    categoryId,
    category,
    imageUrl,
    rating,
    reviewCount,
    inStock,
    stock,
    brand,
    tags,
    features,
    inCart,
    addToCart,
    removeItem,
}) {
    return (
        <div className="p-2 bg-gray-200 rounded-md flex flex-col justify-between gap-y-3 relative">
            <div
                className={`absolute top-8 right-0 px-4 rounded-l-2xl py-1 ${inStock ? "bg-white" : "bg-amber-500"} text-sm`}
            >
                {inStock ? (
                    Math.round(
                        ((originalPrice - price) / originalPrice) * 100
                    ) + "% Discount"
                ) : (
                    <>Out of Stock</>
                )}
            </div>
            <img
                src={imageUrl}
                alt={name}
                className="w-full aspect-3/2 rounded-sm object-cover"
            />
            <div className="flex justify-between  flex-wrap gap-x-4">
                <h2 className="text-xl">
                    {name}
                    {inStock && (
                        <span className="text-sm ms-2 text-neutral-700">
                            In Stock ({stock})
                        </span>
                    )}
                </h2>
                <div className="flex justify-center items-baseline gap-2">
                    <p className="font-medium text-lg">{price}$</p>
                    <p className="line-through decoration-red-500 text-sm">
                        {originalPrice}$
                    </p>
                </div>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="ms-auto w-max flex gap-3">
                <Rating rating={rating} />
                <span>({reviewCount}+)</span>
            </div>
            <div className="ms-auto w-max">
                {!inCart ? (
                    <button
                        type="button"
                        disabled={!inStock}
                        onClick={() => addToCart(id)}
                        className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md outline-hidden cursor-pointer text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => removeItem(id)}
                        className="bg-red-500 text-white font-medium py-2 px-4 rounded-md outline-hidden cursor-pointer text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Remove Item
                    </button>
                )}
            </div>
        </div>
    );
}

function Rating({ rating }) {
    return (
        <div className="text-amber-500">
            {Array.from({ length: Math.round(rating) }, () => "⭐").map(
                (star, idx) => star
            )}
        </div>
    );
}

export default ProductCard;
