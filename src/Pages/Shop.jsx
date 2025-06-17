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
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import CategorySection from "../Components/CategorySection";

const Shop = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products?.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  return (
    <div>
      <CategorySection onCategoryClick={setSelectedCategory} />
      <div className="container mx-auto px-4 py-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-2"
                />
                <h3 className="font-bold">{product.title}</h3>
                <p>₹{product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
