import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { singleProduct } from '../redux/features/singleProductSlice';
import { asyncAddProductToCart } from '../redux/features/cartSlice';
import { API } from '../API';


const SingleProductPage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const handleAddToCart = () => {
        if (specificProduct) {
            dispatch(asyncAddProductToCart(specificProduct));
        }
    };

    const dispatch = useDispatch();
    const { specificProduct } = useSelector(state => state.singleProduct)

    useEffect(() => {
        dispatch(singleProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    return (
        <section className='mt-5 mb-4'>
            <div className='d-flex justify-content-center mb-4'>
                <div className='container position-relative'>
                    <h2 className="text-center fs-1 fw-bold mb-4 product">
                        Products Details Of
                        <span className='ms-3'>
                            {specificProduct?.productName}
                        </span>
                    </h2>
                    <img src="../assets/car-logo.png" className='car-logo car-logo-single'
                        alt="car-logo"
                    />
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-lg-4 col-md-6 col-12 mb-3"
                        key={specificProduct?._id}
                    >
                        <div className="card border-0 mx-auto"
                            style={{ width: '18rem', backgroundColor: 'rgb(249 249 247)' }}
                        >
                            <img src={specificProduct?.myImage}
                                alt={specificProduct?.productName}
                            />
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-8 col-md-6 col-12 mb-3">
                        <div>
                            <h1> {specificProduct?.productName} </h1>
                            <p className='text-justify'> {specificProduct?.description} </p>
                            <h5> Sale Price : ${specificProduct?.salePrice} </h5>
                            <button  onClick={handleAddToCart}
                                className="btn btn-outline-primary w-50 rounded p-2 mt-2">
                                Add To Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default SingleProductPage