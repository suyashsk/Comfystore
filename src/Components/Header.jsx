import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import { AiOutlineMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({mode,setMode}) => {
    
    const navigate = useNavigate();
    function handleBasket(){
        navigate("/cart")
    }

    function toggleMode(){
        setMode(!mode)
    }
  return (
    <div className='main_header'>
        <div className='top_nav_bar'>
            <ul className='top_ul'>
                <li className='items'><Link to="/">Sign in</Link></li>
                <li className='items'><Link to="/">Create Account</Link></li>
            </ul>
        </div>
        <div className='middle_nav_bar'>
            <div className='logo'>
                <h1 className='top_heading'><Link to="/">C</Link></h1>
            </div>
            <div className='links_holder1'>
                <ul className='links_holder'>
                    <li className='linkss'><Link to="/">Home</Link></li>
                    <li className='linkss'><Link to="/about">About</Link></li>
                    <li className='linkss'><Link to="/products">Products</Link></li>
                    <li className='linkss'><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <div>
                <div  className='btn_holder'>
                    <button onClick={toggleMode}>   {mode ?  <AiFillSun style={{fontSize:"25px"}} /> : <AiOutlineMoon style={{fontSize:"25px"}}/>}</button>
                    <button onClick={handleBasket}><AiOutlineShoppingCart style={{fontSize:"25px"}} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header