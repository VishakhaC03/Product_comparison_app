function SearchBar({
  searchTerm,
  setSearchTerm,
}) {

  return (
    <div className="
      flex
      justify-center
      mb-10
    ">

      <input
        type="text"
        placeholder="Search any product..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="
          w-full
          md:w-96
          border
          border-gray-300
          rounded-lg
          p-3
          shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      />

    </div>
  );
}

export default SearchBar;