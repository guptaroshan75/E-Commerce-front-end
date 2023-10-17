import React from 'react';
import { useSelector } from 'react-redux';

const SearchProduct = () => {
    const { searchProducts } = useSelector(state => state.products);

    return (
        <section className='mt-5 mb-4'>
            {searchProducts.length === 0 ? (
                <>
                    <div className='d-flex justify-content-center'>
                        <div className='container position-relative'>
                            <h2 className="text-center fs-1 fw-bold mb-4 product">
                                No products Found For Your Search.
                            </h2>
                            <img src="../assets/car-logo.png" className='car-logo car-logo-price'
                                alt="car-logo"
                            />
                        </div>
                    </div>

                    <img src="../assets/PageNot.avif" alt="PageNot"
                        className='d-block mx-auto page-not-img'
                    />
                </>
            ) : (
                <>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='container position-relative'>
                            <h2 className="text-center fs-1 fw-bold mb-4 product">
                                Search Product
                            </h2>
                            <img src="../assets/car-logo.png" className='car-logo'
                                alt="car-logo"
                            />
                        </div>
                    </div>

                    <div className='container'>
                        <div className="row">
                            {searchProducts.map((searchProduct) => (

                                <div className="col-sm-6 col-lg-3 col-md-4 col-12 mb-3 d-flex 
                                   justify-content-center" key={searchProduct?._id}
                                >
                                    <div className='card rounded search-list'>
                                        <img src={searchProduct?.myImage} 
                                            className="mx-auto card-img-top"
                                            alt={searchProduct?.productName}
                                            style={{ width: 'fit-content'}}
                                        />
                                        <div className="card-body">
                                            <h6 className='card-title'>
                                                {searchProduct?.productName}
                                            </h6>
                                            <div className="card-product-text">
                                                <p> {searchProduct?.description} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

        </section >
    )
}

export default SearchProduct