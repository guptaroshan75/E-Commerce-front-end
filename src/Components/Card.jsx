import React from 'react';
import { Link } from 'react-router-dom';
import { asyncAddProductToCart, asyncRemoveProductFromCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import { API } from '../API';

const Card = ({ products, btnType }) => {
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(btnType ? asyncRemoveProductFromCart(products?._id) :
            asyncAddProductToCart(products)
        );
    }

    return (
        <div className={`card rounded ${btnType ? 'product-list-cart' : 'product-list'}`}>
            <Link className="nav-link mx-auto"
                to={`/single-product/${products?.productName.split(' ').join('-')}?id=${products?._id}`}
            >
                <img src={products?.myImage}
                    className="mx-auto" alt={products?.productName}
                />
            </Link>

            <div className="card-body">
                <Link className="nav-link"
                    to={`/single-product/${products?.productName.split(' ').join('-')}?id=${products?._id}`}
                >
                    <h6 className='card-title'>
                        {products?.productName}
                    </h6>
                </Link>
                <div className="card-product-text">
                    <p> {products?.description} </p>
                </div>
                <button onClick={handleSubmit}
                    className={`w-100 rounded p-2 mt-2 
                        ${btnType ? 'btn btn-danger' : 'btn btn-outline-primary'}`
                    }
                >
                    {btnType ? 'Remove From Cart' : 'Add To Cart'}
                </button>
            </div>
        </div>
    )
}

export default Card