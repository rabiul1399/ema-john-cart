import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Order.css'
const Orders = () => {
    const [products,setProducts] =useProducts();
    return (
        <div className='order'>
            <h3>All ordered shoping</h3>
            <h4>This order: {products.length}</h4>
        </div>
    );
};

export default Orders;