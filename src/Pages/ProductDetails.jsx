import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import { fetchProducts } from '../Redux/productSlice'
import { FaStar } from 'react-icons/fa'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { products, status, error } = useSelector(state => state.product)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  
  const product = Array.isArray(products)
    ? products.find(p => String(p.id) === String(id))
    : undefined

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-xl text-gray-600 animate-pulse">Loading product...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg text-red-500 mb-4">Error: {error}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-500 mb-4">Product not found.</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto my-12 bg-gradient-to-br from-white via-red-50 to-red-100 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 border border-red-100">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title || product.name}
          className="w-full max-w-xs h-96 object-contain rounded-2xl border-2 border-red-200 shadow-lg bg-white"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-red-700 drop-shadow">{product.title || product.name}</h2>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl drop-shadow" />
            ))}
            <span className="ml-2 text-gray-500 text-base">(4.0)</span>
          </div>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {product.description || "No description available."}
          </p>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-red-600 drop-shadow">₹{product.price}</span>
            <span className="text-base text-gray-400 line-through">
              ₹{Math.round(product.price * 1.2)}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
              20% OFF
            </span>
          </div>
        </div>
        <button
          className="w-full py-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl text-xl font-bold shadow-lg hover:from-red-600 hover:to-red-800 transition"
          onClick={() => {
            dispatch(addToCart(product))
            alert("Product Added Successfully!!")
          }}
        >
          Add to Cart
        </button>
        <button
          className="mt-4 w-full py-2 bg-white border border-red-400 text-red-600 rounded-xl text-base font-semibold hover:bg-red-50 transition"
          onClick={() => navigate(-1)}
        >
          Back to Shop
        </button>
      </div>
    </div>
  )
}

export default ProductDetails