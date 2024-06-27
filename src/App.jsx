
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Cart from './Components/Cart'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { capitalize } from '@mui/material'
function App() {
  const[mode,setMode] = useState(false);
  const[products,setProducts] = useState([]);

  async function fetchData(){
    try{
      const res = await axios.get("https://strapi-store-server.onrender.com/api/products")
      setProducts(res.data.data)
    }catch(error){
      console.error(error);
    }
   
    // console.log(res.data.data)
  }
 console.log(products);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className={mode ? "dark" : "light"} >
    <BrowserRouter>
    <Header mode={mode} setMode={setMode} />
    <Routes>
      <Route path='/' element={<Home product={products} setProduct={setProducts} />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App
