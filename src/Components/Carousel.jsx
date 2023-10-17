import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="../assets/banner.png" className="d-block w-100"
                        alt="banner-image"
                    />
                    <div className="carousel-caption d-sm-block d-md-block
                         position-absolute text w-50 carsoul-content"
                    >
                        <div className='d-flex align-items-center carsoul-content-heading'>
                            <div>
                                <h1 className='me-3 mb-3 h1'>One Of the leading</h1>
                            </div>
                            <div className='border-bottom border-width'> </div>
                        </div>

                        <div className='text-white banner-content position-relative'>
                            <h2 className='mb-3'>
                                Trader And Supplier Of Auto  Parts And Components.
                            </h2>
                            <p>
                                LITTAL brand covers vast variety of small spare parts
                                suiatble for Maruti Suzuki cars which are likely to replace
                                very frequently. At Promod Maruti Parts, we understand the
                                importance of having the right car parts of you Suzuki.
                            </p>
                            <Link className="nav-link text-white banner-content-btn" to={'/contact'}>
                                <button className='btn btn-dark p-2 d-flex justify-content-center'>
                                    CONTACT US
                                    <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="../assets/banner.png" className="d-block w-100"
                        alt="banner-image"
                    />
                    <div className="carousel-caption d-sm-block d-md-block
                         position-absolute text w-50 carsoul-content"
                    >
                        <div className='d-flex align-items-center carsoul-content-heading'>
                            <div>
                                <h1 className='me-3 mb-3 h1'>One Of the leading</h1>
                            </div>
                            <div className='border-bottom border-width'> </div>
                        </div>

                        <div className='text-white banner-content position-relative'>
                            <h2 className='mb-3'>
                                Trader And Supplier Of Auto  Parts And Components.
                            </h2>
                            <p>
                                LITTAL brand covers vast variety of small spare parts
                                suiatble for Maruti Suzuki cars which are likely to replace
                                very frequently. At Promod Maruti Parts, we understand the
                                importance of having the right car parts of you Suzuki.
                            </p>
                            <Link className="nav-link text-white banner-content-btn" to={'/contact'}>
                                <button className='btn btn-dark p-2 d-flex justify-content-center'>
                                    CONTACT US
                                    <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="../assets/banner.png" className="d-block w-100"
                        alt="banner-image"
                    />
                    <div className="carousel-caption d-sm-block d-md-block
                         position-absolute text w-50 carsoul-content"
                    >
                        <div className='d-flex align-items-center carsoul-content-heading'>
                            <div>
                                <h1 className='me-3 mb-3 h1'>One Of the leading</h1>
                            </div>
                            <div className='border-bottom border-width'> </div>
                        </div>

                        <div className='text-white banner-content position-relative'>
                            <h2 className='mb-3'>
                                Trader And Supplier Of Auto  Parts And Components.
                            </h2>
                            <p>
                                LITTAL brand covers vast variety of small spare parts
                                suiatble for Maruti Suzuki cars which are likely to replace
                                very frequently. At Promod Maruti Parts, we understand the
                                importance of having the right car parts of you Suzuki.
                            </p>
                            <Link className="nav-link text-white banner-content-btn" to={'/contact'}>
                                <button className='btn btn-dark p-2 d-flex justify-content-center'>
                                    CONTACT US
                                    <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className="carousel-item" data-bs-interval="2000">
                    <img src="../assets/banner.png" className="d-block w-100"
                        alt="banner-image"
                    />
                    <div className="carousel-caption d-sm-block d-md-block
                         position-absolute text w-50"
                    >
                        <div className='d-flex align-items-center'>
                            <div>
                                <h1 className='me-3 mb-3 h1'>One Of the leading</h1>
                            </div>
                            <div className='border-bottom border-width'> </div>
                        </div>
                        <div className='text-white banner-content position-relative'>
                            <h2 className='mb-3'> Trader And Supplier Of Auto </h2>
                            <h2 className='mb-3'> Parts And Components. </h2>
                            <p>
                                LITTAL brand covers vast variety of small spare parts
                                suiatble for Maruti Suzuki cars which are likely to replace
                                very frequently. At Promod Maruti Parts, we understand the
                                importance of having the right car parts of you Suzuki.
                            </p>
                            <Link className="nav-link text-white" to={'/contact'}>
                                <button className='btn btn-dark p-2 d-flex justify-content-center'>
                                    CONTACT US
                                    <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="../assets/banner.png" className="d-block w-100"
                        alt="banner-image"
                    />
                    <div className="carousel-caption d-sm-block d-md-block d-none
                         position-absolute text w-50"
                    >
                        <div className='d-flex align-items-center'>
                            <div>
                                <h1 className='me-3 mb-3 h1'>One Of the leading</h1>
                            </div>
                            <div className='border-bottom border-width'> </div>
                        </div>
                        <div className='text-white banner-content position-relative'>
                            <h2 className='mb-3'> Trader And Supplier Of Auto </h2>
                            <h2 className='mb-3'> Parts And Components. </h2>
                            <p>
                                LITTAL brand covers vast variety of small spare parts
                                suiatble for Maruti Suzuki cars which are likely to replace
                                very frequently. At Promod Maruti Parts, we understand the
                                importance of having the right car parts of you Suzuki.
                            </p>
                            <Link className="nav-link text-white" to={'/contact'}>
                                <button className='btn btn-dark p-2 d-flex justify-content-center'>
                                    CONTACT US
                                    <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleDark" data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                data-bs-target="#carouselExampleDark" data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel