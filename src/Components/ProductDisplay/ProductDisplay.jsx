import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img  className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdispay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel fugit blanditiis perferendis expedita, ducimus exercitationem debitis, maiores dicta inventore adipisci soluta laudantium voluptatibus quam optio? Quaerat aliquid vero dolor!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD to cart</button>
            <p className="productdisplay-right-category"><span>Category :</span> women , t shirt, crop-top</p>
            <p className="productdisplay-right-category"><span>tags :</span>modern, latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay