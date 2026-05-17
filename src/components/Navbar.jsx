import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        bg-purple-800
        text-white
        shadow-lg
        sticky
        top-0
        z-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        <h1
          className="
            text-2xl
            font-bold
          "
        >
          Product Comparison
        </h1>

        <div
          className="
            flex
            gap-8
            text-lg
          "
        >
          <Link to="/">Home</Link>

          <Link to="/products">
            Products
          </Link>

           <Link to="/compare">
            Compare
          </Link>

          <Link to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;