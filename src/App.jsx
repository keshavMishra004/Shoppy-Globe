// import { BrowserRouter,Routes, Route  } from "react-router-dom"
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
// import Home from "./Pages/Home"
// import Shop from "./Pages/Shop"
// import Cart from "./Pages/Cart"
// import Checkout from "./Pages/Checkout"
// import FilterData from "./Pages/FilterData"


// function App() {
  

//   return (
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/shop" element={<Shop/>}></Route>
//         <Route path="/cart" element={<Cart/>}></Route>
//         <Route path="/checkout" element={<Checkout/>}></Route>
//         <Route path="/filter-data" element={<FilterData/>}></Route>
//       </Routes>
//     <Footer/>
//     </BrowserRouter>
//   )
// }

// export default App
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Lazy-loaded page components
const Home = lazy(() => import("./Pages/Home"));
const Shop = lazy(() => import("./Pages/Shop"));
const Cart = lazy(() => import("./Pages/Cart"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

