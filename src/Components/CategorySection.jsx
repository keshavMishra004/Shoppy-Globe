// import React from 'react'
// import ManCategory from "../assets/Images/menn.jpg"
// import WomanCategory from "../assets/Images/womenn.jpg"
// import KidsCategory from "../assets/Images/kiddo.jpg"
// const Categories = [
//     {
//         title: "Men",
//         imageUrl: ManCategory,
//     },
//     {
//         title: "Women",
//         imageUrl: WomanCategory,
//     },
//     {
//         title: "Kids",
//         imageUrl: KidsCategory,
//     },
// ]

// const CategorySection = () => {
//   return (
//     <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
//       {Categories.map((Category, index)=>(
//             <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
//                 <img src={Category.imageUrl} alt="" className='w-full h-full rounded-lg shadow-md' />
//                 <div className='absolute top-20 left-12'>
//                     <p className='text-xl font-bold'>{Category.title}</p>
//                     <p className='text-pink-600'>View All</p>
//                 </div>
//             </div>
//       ))}
//     </div>
//   )
// }

// export default CategorySection
import React from 'react'
import ManCategory from "../assets/Images/menn.jpg"
import WomanCategory from "../assets/Images/womenn.jpg"
import KidsCategory from "../assets/Images/kiddo.jpg"

const Categories = [
    {
        title: "Men",
        imageUrl: ManCategory,
        apiCategory: "men's clothing"
    },
    {
        title: "Women",
        imageUrl: WomanCategory,
        apiCategory: "women's clothing"
    },
    {
        title: "Kids",
        imageUrl: KidsCategory,
        apiCategory: "kids" 
    },
]

const CategorySection = ({ onCategoryClick }) => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {Categories.map((Category, index)=>(
            <div
                key={index}
                className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                onClick={() => onCategoryClick(Category.apiCategory)}
            >
                <img src={Category.imageUrl} alt={Category.title} className='w-full h-full rounded-lg shadow-md' />
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{Category.title}</p>
                    <p className='text-pink-600'>View All</p>
                </div>
            </div>
      ))}
    </div>
  )
}

export default CategorySection


