import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/features/categorySlice';
import { Link } from 'react-router-dom';
import { API } from '../API';

const Product = () => {
    const dispatch = useDispatch();
    const { loading, categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories())
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <section className='mt-5 mb-4'>
            <div className='d-flex justify-content-center mb-5'>
                <div className='container position-relative'>
                    <h2 className="text-center fs-1 fw-bold mb-2 product">
                        Products Category
                    </h2>
                    <img src="../assets/car-logo.png" className='car-logo'
                        alt="car-logo"
                    />
                </div>
            </div>

            <div className='container'>
                {loading ? (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : (<div className="row">
                    {categories.map((category) => (
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0 
                            d-flex flex-column align-items-center" key={category?._id}
                        >
                            <div className="card mb-3 img-card">
                                <div style={{ margin: 'auto' }}>
                                    <div className="card-body">
                                        <Link className="nav-link"
                                            to={`/product-category/${category.catName.split(' ').join('-')}?id=${category?._id}`}
                                        >
                                            <img src={category?.myImage}
                                                width={'100px'} alt={category.catName}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link className="nav-link"
                                to={`/product-category/${category.catName}?id=${category?._id}`}
                            >
                                <h6 className='mb-3 text-center'> {category.catName} </h6>
                            </Link>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </section>
        // <section className='mt-5 mb-5'>
        //     <div className='d-flex justify-content-center mb-3'>
        //         <div className='container position-relative'>
        //             <h2 className="text-center fs-1 fw-bold mb-4 product">
        //                 Products Category
        //             </h2>
        //             <img src="../assets/car-logo.png" className='car-logo'
        //                 alt="car-logo"
        //             />
        //         </div>
        //     </div>

        //     <div className='container'>
        //         {loading ? (
        //             <div class="spinner-border" role="status">
        //                 <span class="visually-hidden">Loading...</span>
        //             </div>
        //         ) : (<div className="row">
        //             {categories.map((category) => (
        //                 <div className="col-lg-2 col-md-3 col-sm-4 col-4 mb-3 mb-sm-0"
        //                     key={category?._id}
        //                 >
        //                     <div className="card mb-3 img-card">
        //                         <div style={{ margin: 'auto' }}>
        //                             <div className="card-body">
        //                                 <Link className="nav-link"
        //                                     to={`/product-category/${category.catName.split(' ').join('-')}?id=${category?._id}`}
        //                                 >
        //                                     <img src={category.myImage} width={'100px'}
        //                                         alt={category.catName}
        //                                     />
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <Link className="nav-link"
        //                         to={`/product-category/${category.catName.split(' ').join('-')}?id=${category?._id}`}
        //                     >
        //                         <h6 className='mb-3 text-center'> {category.catName} </h6>
        //                     </Link>
        //                 </div>
        //             ))}
        //         </div>
        //         )}
        //     </div>
        // </section>
    )
}

export default Product