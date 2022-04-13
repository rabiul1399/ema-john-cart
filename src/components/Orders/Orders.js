import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Orders = () => {
    const [products,setProducts] =useProducts();
    const [cart, setCart] = useCart(products);
    const navigate =useNavigate();

    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)


    }

    return (
        <div className='shop-container'>
         <div className="review-container">
             {
                 cart.map(product => <ReviewItem product={product} key={product.id} 
                    handleRemoveProduct={handleRemoveProduct}
                 ></ReviewItem>)
             }
         </div>

         <div className="cart-container">
             <Cart cart={cart}>
                 <Link to='/inventory'>
                     <button onClick={() => navigate('/inventory')}>Proceed Checkout</button>
                 </Link>
             </Cart>


         </div>
        </div>
    );
};

export default Orders;