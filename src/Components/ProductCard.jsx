// import React from 'react'
// import { FaStar } from 'react-icons/fa'
// import { addToCart } from '../Redux/cartSlice'
// import { useDispatch } from 'react-redux'

// const ProductCard = ({product}) => {
//     const dispatch = useDispatch()
//     const handleAddToCart = (e, product) =>{
//         e.stopPropagation()
//         e.preventDefault()
//         dispatch(addToCart(product))
//         alert("Product Added Succesfully!!")
//     }
//   return (
//     <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
//       <img src={product.image} alt={product.title || product.name} className='w-full h-48 object-contain mb-4' />
//       <h3 className='text-lg font-semibold'>{product.title || product.name}</h3>
//       <p className='text-gray-500'>₹{product.price}</p>
//       <div className='flex items-center mt-2'>
//         <FaStar className='text-yellow-500'/>
//         <FaStar className='text-yellow-500'/>
//         <FaStar className='text-yellow-500'/>
//         <FaStar className='text-yellow-500'/>

//       </div>
//       <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all' onClick={(e) => handleAddToCart(e, product)}>
//         <span className='group-hover:hidden'>+</span>
//         <span className='hidden group-hover:block'>Add to Cart</span>
//       </div>
//     </div>
//   )
// }

// export default ProductCard
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../Redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product Added Successfully!!")
  }

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 grid-cols-1'>
      <Link to={`/product/${product.id}`}> <img
        src={product.image}
        alt={product.title || product.name}
        className='w-full h-40 sm:h-48 md:h-52 lg:h-56 object-contain mb-4'
      />
      </Link> 

      <h3 className='text-base sm:text-lg font-semibold line-clamp-2'>
        {product.title || product.name}
      </h3>

      <p className='text-sm sm:text-base text-gray-600 mb-1'>
        ₹{product.price}
      </p>

      <div className='flex items-center gap-1 mb-3'>
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className='text-yellow-500 text-sm sm:text-base' />
        ))}
      </div>

      <div
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-600 group text-white text-sm sm:text-base rounded-full hover:w-32 hover:bg-red-700 transition-all cursor-pointer overflow-hidden'
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className='group-hover:hidden block'>+</span>
        <span className='hidden group-hover:block whitespace-nowrap px-2'>Add to Cart</span>
      </div>
    </div>
  )
}

export default ProductCard


