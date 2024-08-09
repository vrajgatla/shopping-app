import React , {useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>shopper</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>MEN</Link> {menu==="mens"?<hr/>:<></>}</li >
          <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>WOMEN</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar