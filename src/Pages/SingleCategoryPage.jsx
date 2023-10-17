import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSpecificCategory, getSpecificCategoryProduct } from '../redux/features/categorySlice';
import Card from '../Components/Card';

const SingleCategoryPage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { specificCategoriesProducts } = useSelector(state => state.category);
    const { specificCategory } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getSpecificCategory(id))
        dispatch(getSpecificCategoryProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center mb-4'>
                <div className='container position-relative'>
                    <h2 className="text-center fs-1 fw-bold mb-4 product">
                        Products List Of
                        <span className='ms-3'>
                            {specificCategory?.catName}
                        </span>
                    </h2>
                    <img src="../assets/car-logo.png" className='car-logo car-logo-single'
                        alt="car-logo"
                    />
                </div>
            </div>

            <div className='container'>
                {specificCategoriesProducts.length === 0 ? (
                    <h1 className="text-center fs-3 fw-bold">
                        No Products Found For This Category
                        </h1>
                ) : (
                    <div className="row">
                        {specificCategoriesProducts.map((products) => (
                            <div className="col-sm-6 col-lg-3 col-md-4 col-12 mb-3"
                                key={products?._id}
                            >
                                <Card products={products} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </section >
    )
}

export default SingleCategoryPage