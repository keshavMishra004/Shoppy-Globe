// import React from 'react'
// import ProductCard from '../Components/ProductCard'
// import useFetch from '../hooks/useFetch'

// const Shop = () => {
//     const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products/");

//     return (
//       <div>
//         <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
//           <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
//           <div className='grid grid-cols-11 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
//             {loading && <p>Loading...</p>}
//             {error && <p>Error loading products.</p>}
//             {products && products.map((product) => (
//                 <ProductCard key={product.id} product={product}/>
//             ))}
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Shop;
// Example usage in d:\Shoppy-Globe\src\Pages\Shop.jsx
import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import CategorySection from "../Components/CategorySection";
import ProductCard from "../Components/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const location = useLocation();
  const navigate = useNavigate();

  // Get search value from URL query param
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search")?.toLowerCase() || "";
  const [selectedCategory, setSelectedCategory] = useState(null);

  // When a category is clicked, clear search and update URL
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/shop"); // Remove search param from URL
  };

  // Filtering logic: category takes precedence over search
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (selectedCategory) {
      return products.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    } else if (searchValue) {
      return products.filter(
        (product) =>
          (product.title || product.name || "")
            .toLowerCase()
            .includes(searchValue)
      );
    }
    return products;
  }, [products, searchValue, selectedCategory]);

  return (
    <div>
      <CategorySection onCategoryClick={handleCategoryClick} />
      <div className="container mx-auto px-4 py-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
