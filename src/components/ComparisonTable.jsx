function ComparisonTable({
  selectedProducts,
  removeProduct,
}) {

  // No products selected
  if (selectedProducts.length === 0)
    return null;

  // Dynamic features
  const features = Object.keys(
    selectedProducts[0]
  ).filter(
    (key) =>
      typeof selectedProducts[0][key] !==
        "object" &&
      key !== "thumbnail" &&
      key !== "images"
  );

  // Highlight differences
  const isDifferent = (feature) => {

    const values = selectedProducts.map(
      (product) => product[feature]
    );

    return new Set(values).size > 1;
  };

  return (
    <div className="
      overflow-x-auto
      mt-10
      bg-purple-300
    ">

      <table className="
        w-full
        bg-purple-200
        shadow-lg
        rounded-xl
        overflow-hidden
      ">

        {/* Table Header */}
        <thead>

          <tr className="
            bg-purple-600
            text-white
          ">

            <th className="
              p-4
              text-left
            ">
              Feature
            </th>

            {selectedProducts.map(
              (product) => (

                <th
                  key={product.id}
                  className="
                    p-4
                    min-w-50
                    relative
                  "
                >

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      removeProduct(
                        product.id
                      )
                    }
                    className="
                      absolute
                      top-2
                      right-2
                      bg-red-500
                      px-2
                      py-1
                      rounded
                      text-sm
                    "
                  >
                    ✕
                  </button>

                  {product.title}

                </th>

              )
            )}

          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {features.map((feature) => (

            <tr
              key={feature}
              className={
                isDifferent(feature)
                  ? "bg-purple-400"
                  : ""
              }
            >

              <td className="
                border
                p-4
                font-semibold
                capitalize
              ">
                {feature}
              </td>

              {selectedProducts.map(
                (product) => (

                  <td
                    key={product.id}
                    className="
                      border
                      p-4
                      text-center
                    "
                  >
                    {String(
                      product[feature]
                    )}
                  </td>

                )
              )}

            </tr>

          ))}

        </tbody>

      </table>

      <p className="
        mt-4
        text-sm
        text-gray-600
      ">
        Dark rows indicate differences
        between products.
      </p>

    </div>
  );
}

export default ComparisonTable;