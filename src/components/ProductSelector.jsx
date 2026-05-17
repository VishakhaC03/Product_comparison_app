function ProductSelector({
  products,
  selectedProduct,
  onSelect,
  label,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700">
        {label}
      </label>

      <select
        value={selectedProduct?.id || ""}
        onChange={(e) => {
          const product = products.find(
            (item) => item.id === Number(e.target.value)
          );

          onSelect(product);
        }}
        className="
          border border-gray-300
          rounded-lg
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      >
        <option value="">Select Product</option>

        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductSelector;