import {
  useNavigate,
} from "react-router-dom";

import ComparisonTable
from "../components/ComparisonTable";

function Compare({
  selectedProducts,
  removeProduct,
  bestProduct,
  setBestProduct,
}) {

  const navigate =
    useNavigate();

  return (

    <div className="p-6 bg-purple-300">

      <h1
        className="
          text-4xl
          font-bold
          text-center
          text-purple-700
          mb-10
        "
      >
        Compare Products
      </h1>

      {selectedProducts.length ===
      0 ? (

        <div className="
          text-center
          text-2xl
          font-semibold
          text-gray-600
          mt-20
        ">
          No products selected
          for comparison.
        </div>

      ) : (

        <>
          {/* Winner Selection */}
            <div className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-4
                mb-10
            ">

                {selectedProducts.map(
                    (product) => (

                <div
                 key={product.id}
                 className={`
                    p-4
                    rounded-2xl
                    shadow-md
                    border-2
                    transition
                    max-w-60
                    mx-auto

                    ${
                        bestProduct?.id ===
                        product.id
                        ? `
                            border-green-500
                            bg-green-50
                        `
                        : `
                            border-gray-200
                            bg-white
                        `
                    }
                    `}
                >

                {/* Product Image */}
                    <img
                        src={product.thumbnail}
                         alt={product.title}
                            className="
                            h-24
                            w-full
                             object-contain
                            mb-3"
                    />

                 {/* Title */}
                    <h2 className="
                        text-sm
                         font-semibold
                        mb-2
                        line-clamp-2
                                    ">
                                    {product.title}
                                    </h2>

                                    {/* Price */}
                                    <p className="
                                    text-gray-600
                                    text-sm
                                    mb-3
                                    ">
                                    ₹{product.price}
                                    </p>

                                    {bestProduct?.id ===
                                    product.id ? (

                                    <div className="
                                        bg-green-600
                                        text-white
                                        text-center
                                        py-2
                                        rounded-lg
                                        text-sm
                                        font-medium
                                    ">
                                        ✓ Best Choice
                                    </div>

                                    ) : (

                                    <button
                                        onClick={() =>
                                        setBestProduct(
                                            product
                                        )
                                        }
                                        className="
                                        w-full
                                        bg-purple-600
                                        hover:bg-purple-800
                                        text-white
                                        py-2
                                        rounded-lg
                                        text-sm
                                        font-medium
                                        transition
                                        "
                                    >
                                        Choose Best
                                    </button>

                                    )}

                                </div>

                                )
                            )}

                            </div>

          {/* View Winner */}
          {bestProduct && (

            <div className="
              text-center
              mb-10
            ">

              <button
                onClick={() =>
                  navigate(
                    `/product/${bestProduct.id}`
                  )
                }
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  text-lg
                  font-bold
                "
              >
                View Best Product
              </button>

            </div>

          )}

          {/* Comparison Table */}
          <ComparisonTable
            selectedProducts={
              selectedProducts
            }
            removeProduct={
              removeProduct
            }
          />
        </>

      )}

    </div>
  );
}

export default Compare;