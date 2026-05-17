import {useParams,useNavigate} from "react-router-dom";

function ProductDetails({products,})
 {
  const navigate =
  useNavigate();
  // Get URL parameter
  const { id } = useParams();

  // Find selected product
  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  // Product not found
  if (!product) {

    return (

      <div className="
        text-center
        text-3xl
        mt-20
      ">
        Product Not Found
      </div>

    );
  }

  return (

    <div className="
      min-h-screen
      p-6
      bg-purple-300
    ">
        
      <div className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden
      ">

        <button
  onClick={() =>
    navigate(-1)
  }
  className="
    mb-6
    bg-purple-600
    hover:bg-purple-800
    text-white
    px-6
    py-3
    rounded-xl
    font-semibold
    shadow-md
    transition
  "
>
  ← Back to Products
</button>

        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="
            w-full
            h-100
            object-cover
          "
        />

        {/* Product Content */}
        <div className="p-10">

          <h1 className="
            text-5xl
            font-bold
            mb-6
          ">
            {product.title}
          </h1>

          <p className="
            text-gray-600
            text-lg
            mb-6
          ">
            {product.description}
          </p>

          <div className="
            grid
            grid-cols-2
            gap-6
            text-lg
          ">

            <p>
              <span className="
                font-bold
              ">
                Brand:
              </span>
              {" "}
              {product.brand}
            </p>

            <p>
              <span className="
                font-bold
              ">
                Category:
              </span>
              {" "}
              {product.category}
            </p>

            <p>
              <span className="
                font-bold
              ">
                Price:
              </span>
              {" "}
              ${product.price}
            </p>

            <p>
              <span className="
                font-bold
              ">
                Rating:
              </span>
              {" "}
              {product.rating}
            </p>

            <p>
              <span className="
                font-bold
              ">
                Stock:
              </span>
              {" "}
              {product.stock}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;