function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {

  return (
    <div className="
      flex
      justify-center
      mb-8
    ">

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
        className="
          border
          border-gray-300
          rounded-lg
          p-3
          shadow-md
          w-full
          md:w-72
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      >

        <option value="">
          All Categories
        </option>

        {categories.map((category) => (

          <option
            key={category}
            value={category}
          >
            {category}
          </option>

        ))}

      </select>

    </div>
  );
}

export default CategoryFilter;