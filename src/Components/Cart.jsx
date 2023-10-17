import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { loading, products } = useSelector(state => state.cart);
    const btnType = window.location.pathname === '/cart-page';

    const amount = products.reduce((prevItem, currentItem) => {
        return prevItem + parseInt(currentItem.price);
    }, 0)

    const totalAmount = 40 + amount;

    return (
        <>
            <div className='container mt-3'>
                {loading ? (<div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : (
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8'>
                            {products.length === 0 ? (
                                <div className='mx-auto'>
                                    <img src='../assets/EmptyCart.svg' alt='Empty Cart'
                                        width={'60%'}
                                    />
                                    <div className='my-3'>
                                        <h4 className='text-center'> Cart is Empty </h4>
                                    </div>
                                    <div className='mx-auto text-center my-2 mb-3'>
                                        <Link to={'/product-category'}>
                                            <button className='btn btn-outline-primary py-2'>
                                                Go To Product-Category
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className='container'>
                                        <div className='row'>
                                            {products.map((products) => (
                                                <div className="col-sm-6 col-lg-4 col-md-6 
                                            col-12 mb-3" key={products?._id}>
                                                    <Card products={products} btnType={btnType} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                        {products.length === 0 ? null : (
                            <div className='col-12 col-md-4 col-lg-4 mb-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between 
                                       align-items-center'
                                        >
                                            <p> Amount </p>
                                            <h6 className='fw-medium'> ${amount.toFixed(2)} </h6>
                                        </div>
                                        <div className='d-flex justify-content-between 
                                       align-items-center'
                                        >
                                            <p> Shipping Charges </p>
                                            <h6 className='fw-medium'> $40 </h6>
                                        </div>
                                        <hr className='mb-3' />
                                        <div className='d-flex justify-content-between 
                                       align-items-center mb-3'
                                        >
                                            <p> Total Amount </p>
                                            <h6 className='fw-medium'> ${totalAmount.toFixed(2)} </h6>
                                        </div>
                                        <Link to={'/checkout-page'} className='nav-link'>
                                            <button className='btn btn-success w-100'>
                                                Pay Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;