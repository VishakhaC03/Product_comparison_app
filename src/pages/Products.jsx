import ProductCard from "../components/ProductCard";

function Products({
  filteredProducts,
  loading,
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  addToCompare,
  selectedProducts,
  removeProduct,
  compareError,
  categorySearchError,
}) 
{

   return (
    <div className="p-6 bg-purple-300">

      {/* Search */}
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="
          w-full
          p-4
          border
          rounded-xl
          mb-6
        "
      />

      {/* Category */}
      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
        className="
          w-full
          p-4
          border
          rounded-xl
          mb-8
        "
      >
        <option value="">
          All Categories
        </option>

        {categories.map(
          (category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          )
        )}
      </select>

      {/* Error */}
      {compareError && (
        <div
          className="
            bg-red-100
            text-red-700
            p-4
            rounded-xl
            mb-6
            text-center
          "
        >
          {compareError}
        </div>
      )}

      {
  categorySearchError && (

    <div className="
      bg-yellow-100
      border
      border-yellow-400
      text-yellow-700
      px-4
      py-3
      rounded-xl
      mb-6
      text-center
      font-semibold
    ">

      {categorySearchError}

    </div>

  )
}

      {/* Loading */}
      {loading ? (
        <h1 className="text-center">
          Loading...
        </h1>
      ) : (
        <>
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCompare={
                    addToCompare
                  }
                />
              )
            )}
          </div>

        </>
      )}
    </div>
  );
}

export default Products;