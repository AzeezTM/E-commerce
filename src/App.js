import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner'
import './App.css';
import Navbar from "./component/Navbar"
import { Route, Routes} from 'react-router-dom';
import Products from './component/products';
import Home from './component/Home';
import Product from './component/Product';





// const Home = React.lazy(() => import("./component/Home"))
// const Product = React.lazy(() => import("./component/Product"))
// const Products = React.lazy(() => import("./component/products"))



function App() {
  return (
    <>
    {/* <Suspense fallback={<Home/>}> */}
    
    <Navbar/>
     <Routes>
     <Route  path='/' element={<Home/>}/>
      <Route  path='products' element={<Product/>} />  
      <Route  path='products/:id' element={<Products/>} />  
      </Routes> 
      
    {/* </Suspense> */}
     
   
    </>
  );
}

export default App;
