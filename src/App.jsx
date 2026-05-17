import {
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import MainLayout
from "./layouts/MainLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Compare from "./pages/Compare";

import {
  fetchProducts,
} from "./services/api";

function App() {

  const [products, setProducts] =
    useState([]);

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    selectedProducts,
    setSelectedProducts,
  ] = useState([]);

  const [
    compareError,
    setCompareError,
  ] = useState("");

  const [
  categorySearchError,
  setCategorySearchError,
] = useState("");

  const [bestProduct, setBestProduct] =
  useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts =
    async () => {

    try {

      setLoading(true);

      const data =
        await fetchProducts();

      setProducts(data);

    } finally {

      setLoading(false);
    }
  };

  const categories = [
    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  const filteredProducts =
  products.filter((product) => {

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    const matchesCategory =
      selectedCategory === ""
        ? true
        : product.category ===
          selectedCategory;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

// Category + Search validation
useEffect(() => {

  setCategorySearchError("");

  if (
    searchTerm.trim() === "" ||
    selectedCategory === ""
  ) {
    return;
  }

  // Check if product exists in ANY category
  const existsAnywhere =
    products.some((product) =>
      product.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  // Exists inside selected category?
  const existsInSelected =
    filteredProducts.length > 0;

  if (
    existsAnywhere &&
    !existsInSelected
  ) {

    setCategorySearchError(
      "Product is outside the selected category. Please change the category and try again."
    );
  }

}, [
  searchTerm,
  selectedCategory,
  products,
  filteredProducts,
]);

  const addToCompare =
    (product) => {

    setCompareError("");

    if (
      selectedProducts.length > 0
    ) {

      const category =
        selectedProducts[0]
          .category;

      if (
        product.category !==
        category
      ) {

        setCompareError(
          `Cannot compare ${product.category} with ${category}`
        );

        return;
      }
    }

    const exists =
      selectedProducts.find(
        (item) =>
          item.id === product.id
      );

    if (exists) {

      setCompareError(
        "Product already added."
      );

      return;
    }

    setSelectedProducts([
      ...selectedProducts,
      product,
    ]);
  };

  const removeProduct =
    (id) => {

    setSelectedProducts(
      selectedProducts.filter(
        (product) =>
          product.id !== id
      )
    );
  };

  return (
    <Routes>

      <Route
        path="/"
        element={<MainLayout />}
      >

        <Route
          index
          element={
            <Home
              searchTerm={
                searchTerm
              }
              setSearchTerm={
                setSearchTerm
              }
              categories={
                categories
              }
              selectedCategory={
                selectedCategory
              }
              setSelectedCategory={
                setSelectedCategory
              }
            />
          }
        />

        <Route
          path="products"
          element={
            <Products
              filteredProducts={
                filteredProducts
              }
              loading={loading}
              searchTerm={
                searchTerm
              }
              setSearchTerm={
                setSearchTerm
              }
              categories={
                categories
              }
              selectedCategory={
                selectedCategory
              }
              setSelectedCategory={
                setSelectedCategory
              }
              addToCompare={
                addToCompare
              }
              selectedProducts={
                selectedProducts
              }
              removeProduct={
                removeProduct
              }
              compareError={
                compareError
              }
              categorySearchError={categorySearchError}
            />
          }
        />

        <Route
        path="compare"
        element={<Compare
        selectedProducts={selectedProducts}
        removeProduct={removeProduct}
        bestProduct={bestProduct}
        setBestProduct={setBestProduct}
          />
        }
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="product/:id"
          element={
            <ProductDetails
              products={products}
            />
          }
        />

      </Route>
    </Routes>
  );
}

export default App;