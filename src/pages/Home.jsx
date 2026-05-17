import bgimage from "../assets/bgimage.png";

import {
  useNavigate,
} from "react-router-dom";

function Home({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {

  const navigate =
    useNavigate();
     return (

    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        relative
        overflow-hidden
      "
      style={{
        backgroundImage:
          `url(${bgimage})`,
      }}
    >

    {/* Dark Overlay */}
      <div className="
        absolute
        inset-0
        bg-black/60
      "></div>

      {/* Gradient Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-linear-to-r
        from-blue-500/20
        via-purple-500/10
        to-pink-500/20
      "></div>

      {/* Main Content */}
      <div className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      ">

        <div className="
          max-w-6xl
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        ">

        {/* Left Content */}
          <div>

            <p className="
              text-purple-900
              text-lg
              font-semibold
              mb-4
              tracking-widest
              uppercase
            ">
              Smart Product Comparison
            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              font-extrabold
              text-white
              leading-tight
              mb-6
            ">              Compare Products
              <span className="
                block
                text-purple-900
              ">
                Like a Pro
              </span></h1>

              <p className="
              text-gray-300
              text-lg
              leading-8
              mb-10
              max-w-xl
            ">
              Compare smartphones, laptops,
              electronics, accessories,
              and many more products side-by-side
              to make smarter buying decisions.
            </p>

            {/* Stats */}
            <div className="
              flex
              flex-wrap
              gap-8
              text-white
            ">
                <div>
                <h2 className="
                  text-3xl
                  font-bold
                ">
                  100+
                </h2>
                <p className="text-gray-300">
                  Products
                </p>
              </div>

                <div>
                <h2 className="
                  text-3xl
                  font-bold
                ">
                  20+
                </h2>
                <p className="text-gray-300">
                  Categories
                </p>
              </div>

                <div>
                <h2 className="
                  text-3xl
                  font-bold
                ">
                  Fast
                </h2>
                <p className="text-gray-300">
                  Comparison
                </p>
              </div>
            </div>
            </div>

            {/* Right Card */}
          <div className="
            bg-purple-300
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-8
            md:p-10
          ">

            <h2 className="
              text-3xl
              font-bold
              text-purple-800
              mb-8
              text-center
            ">
              Start Comparing
            </h2>

            {/* Search Input */}
            <div className="mb-6">

              <label className="
                text-purple-800
                block
                mb-3
                font-medium
              ">
                Search Products
              </label>

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  outline-none
                  text-lg
                  bg-white
                  shadow-lg
                "
              />

            </div>

            {/* Category Filter */}
            <div className="mb-8">

              <label className="
                text-purple-800
                block
                mb-3
                font-medium
              ">
                Select Category
              </label>

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
                  rounded-xl
                  outline-none
                  text-lg
                  bg-white
                  shadow-lg
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
                        {category.replace(
                        "-",
                        " "
                      )}
                    </option>

                  )
                )}

              </select>

            </div>
            
             {/* Button */}
            <button
              onClick={() =>
                navigate("/products")
              }
              className="
                w-full
                bg-purple-800
                hover:bg-purple-900
                text-white
                py-4
                rounded-xl
                text-lg
                font-bold
                transition
                duration-300
                shadow-lg
                hover:scale-105
              "
            >
              Explore Products
            </button>
            </div>

        </div>

      </div>

    </div>
  );
}

export default Home;