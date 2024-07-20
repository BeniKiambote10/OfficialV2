import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import "../components/ProductList.css";

const ProductsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(""); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://serversiderea.onrender.com/products"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      <form className="searchBoxCon">
        <input
          type="text"
          name="searchForm"
          id="searchBox"
          placeholder="Search Product..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      <ProductList products={filteredProducts} searchText={searchText} />
    </div>
  );
};

export default ProductsPage;
