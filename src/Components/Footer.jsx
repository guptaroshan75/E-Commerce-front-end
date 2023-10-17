import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiLogoFacebookCircle, BiPhoneCall } from 'react-icons/bi';
import { LiaYoutubeSquare } from 'react-icons/lia';
import { PiMapPinLineThin } from 'react-icons/pi';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Footer = () => {
    return (
        <section className='container-fluid pt-5 footer-img pb-4'>
            <div className='row mx-4 mt-5'>
                <div className=' col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='mb-3'>
                        <img src='../assets/logo1.png' alt='logo' className='w-25' />
                    </div>

                    <div className='me-5 footer-content'>
                        <p className='text-white'>
                            Pramod Auto Parts Pvt. Ltd. (previously known as Pramod Maruti Parts)
                            has emerged as one of the leading trader and supplier of Auto Parts
                            and components suitable for Maruti Suzuki & Hyundai cars in the
                            aftermarket under the brand name LITTAL
                        </p>
                    </div>

                    <div className='footer-day row'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Monday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Tuesday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Wednesday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Thursday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Friday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Saturday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='text-white second-para'>
                                    10:15 AM - PM
                                </p>
                            </div>

                            <div className='d-flex justify-content-between mb-2 footer-date'>
                                <p className='text-white'> Sunday </p>
                                <div className="fs-6 border-end footer-border mx-4">  </div>
                                <p className='second-para'>
                                    We're Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='text-white footer-col'>
                        <h2 className='mb-3'> Get Latest Updates And Offer:</h2>
                        <p className='text-white'>
                            Our extensive collection of Suzuki car parts online include everything
                            you need for your car's maintenance, repair, and ever accessories to
                            make it look and perform at its best.
                        </p>
                    </div>

                    <div className="form-group mb-4 d-flex footer mt-3">
                        <input type="text" className="form-control rounded-0 me-3"
                            placeholder='Your Email Addres..'
                        />
                        <button className='btn btn-dark rounded-0 px-3'>
                            SUBSCRIBE
                        </button>
                    </div>
                    <div className='border-section mt-3'> </div>

                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div className='d-flex justify-content-between footer-menu'>
                                <h6 className='text-white'> INFORMATION </h6>
                            </div>

                            <div className="nav-menu">
                                <NavLink className="nav-link" to={'/product-category'}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ffff01' : '#fff',
                                    })}
                                >
                                    Products
                                </NavLink>

                                <NavLink className="nav-link" to={'/price-list'}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ffff01' : '#fff',
                                    })}
                                >
                                    Price List
                                </NavLink>

                                <NavLink className="nav-link" to={'/gallery'}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ffff01' : '#fff',
                                    })}
                                >
                                    Gallery
                                </NavLink>

                                <NavLink className="nav-link" to={'/blog'}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ffff01' : '#fff',
                                    })}
                                >
                                    Blog
                                </NavLink>

                                <NavLink className="nav-link" to={'/contact'}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ffff01' : '#fff',
                                    })}
                                >
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='d-flex justify-content-between footer-menu'>
                                <h6 className='text-white'> QUICK LINKS </h6>
                            </div>

                            <div className="nav-menu">
                                <Link className="nav-link" to={'/product'}>
                                    Customer Feedback
                                </Link>
                                <Link className="nav-link" to={'/price-list'}>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='d-flex justify-content-between mb-2'>
                                <h6 className='text-white'> SOCIAL MEDIA LINKS </h6>
                            </div>

                            <div className='nav-menu mb-3'>
                                <Link to={'https://www.facebook.com/LITTALAUTOPARTS'}
                                    target="_blank"
                                >
                                    <BiLogoFacebookCircle className="fs-1 menu-social" />
                                </Link>
                                <Link to={'https://www.youtube.com/channel/UCjau6GpOS-DAFiBQZY33m7w'}
                                    target="_blank"
                                >
                                    <LiaYoutubeSquare className="mx-2 fs-1 menu-social" />
                                </Link>
                            </div>

                            <div className='image-fluid'>
                                <img src="../assets/bar-code.png" alt="bar-code-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <div className=' col-lg-4 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className="card footer-card d-flex flex-row align-items-center px-4">
                            <div>
                                <PiMapPinLineThin
                                    className='border-0 fs-1 p-1 last-footer rounded me-3'
                                />
                            </div>
                            <div>
                                <p>
                                    1134, Prem Gali, Bara Bazaar, Kashmere Gate,
                                    New Delhi - 110006, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=' col-lg-4 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className="card footer-card d-flex flex-row align-items-center px-4">
                            <div>
                                <HiOutlineMailOpen
                                    className='border-0 fs-1 p-1 last-footer rounded me-3'
                                />
                            </div>
                            <div>
                                <h6> EMAIL US: </h6>
                                <p> info@pramodmarutiparts.com </p>
                            </div>
                        </div>
                    </div>

                    <div className=' col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className="card footer-card d-flex flex-row align-items-center px-4">
                            <div>
                                <BiPhoneCall
                                    className='border-0 fs-1 p-1 last-footer rounded me-3'
                                />
                            </div>
                            <div>
                                <h6> Call For Support: </h6>
                                <p> +91-9810197978, 011 - 42758309 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container border-content mt-3'> </div>
            <p className='text-center mt-4 pt-2 footer-para'>
                © Copyright 2020 Pramod Maruti Parts All Rights Reserved.
            </p>

            <div className='border-para d-flex justify-content-center 
               flex-wrap align-items-center mt-3'
            >
                <p> Website Design By: </p>
                <Link to={'https://www.betasofttechnology.com/'} target="_blank">
                    <span className='circle-anim mx-3'>
                        <img src='../assets/beta-soft-technology.png'
                            alt='beta-soft-technology-image'
                        />
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default Footer