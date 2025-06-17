import React, { use } from 'react'
import ProductCard from '../Components/ProductCard';

const FilterData = () => {
    const filteredProducts = useFetch("https://fakestoreapi.com/products?limit=5");
    if (!filteredProducts) {
        return <p>Loading...</p>;
    }
  return (
    <div>
      
    </div>
  )
}

export default FilterData
