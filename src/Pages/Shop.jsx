import React from 'react'
import ProductCard from '../Components/ProductCard'
import useFetch from '../hooks/useFetch'

const Shop = () => {
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products/");

    return (
      <div>
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
          <div className='grid grid-cols-11 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading products.</p>}
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Shop;
