import { faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {handleRemoveProduct,product} = props;
    const {name, img, price,shipping } =product;

    return (
        <div className='review-item'>
           <div className='review-img'>
           <img src={img} alt="" />
           </div>
            <div className='review-item-container'>
            <div className="review-item-detail">
                <p className='produtc-name' title={name}>
                    {name.length > 20 ? name.slice(0,20) + '....':name}
                    </p>
                <p>Price: ${price}</p>
                <p><small>Shipping Charge: ${shipping}</small></p>
              

            </div>
            <div className="delete-container">
                <button onClick={() =>handleRemoveProduct(product)}  className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;