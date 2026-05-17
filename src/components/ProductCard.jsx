import {useNavigate,} from "react-router-dom";

function ProductCard({
  product,
  onCompare,
}) {
  const navigate =  useNavigate();
  return (
    <div className="
      bg-white
      rounded-xl
      shadow-lg
      p-4
      hover:shadow-2xl
      transition
      duration-300
    ">

      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="
          w-full
          h-52
          object-cover
          rounded-lg
        "
      />

      {/* Product Details */}
      <h2 className="
        text-xl
        font-bold
        mt-4
      ">
        {product.title}
      </h2>

      <p className="
        text-gray-600
        mt-1
      ">
        {product.brand}
      </p>

      <p className="
        text-green-800
        font-bold
        text-lg
        mt-2
      ">
        ${product.price}
      </p>

      <p className="
        text-yellow-700
        mt-2
      ">
        ⭐ {product.rating}
      </p>

      {/* Compare Button */}
      <button
        onClick={() =>
          onCompare(product)
        }
        className="
          mt-4
          w-full
          bg-purple-600
          text-white
          py-2
          rounded-lg
          hover:bg-purple-800
          transition
        "
      >
        Compare
      </button>

      <button
      onClick={() =>
       navigate(
      `/product/${product.id}`
        )
      }
      className="
       bg-purple-600
       text-white
        px-4
        py-2
        rounded-lg
         mt-4"
      >
      View Details
      </button>

    </div>
  );
}

export default ProductCard;