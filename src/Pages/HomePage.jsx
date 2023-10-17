import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AboutUs from './AboutUs';
import Enquiry from './Enquiry';
import Blog from './Blog';
import Carousel from '../Components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/features/categorySlice';
import { Link } from 'react-router-dom';
import { useCollapse } from 'react-collapsed'
import Testimonial from '../Components/Testimonial';
import { API } from '../API';

const secondPara = {
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4',
    overflow: 'hidden',
    display: '-webkit-box',
    fontSize: '15px'
}

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setExpanded] = useState(false)
    const { getToggleProps } = useCollapse({ isExpanded })

    const dispatch = useDispatch();
    const { loading, categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories())
        window.scrollTo(0, 0);
    }, [dispatch])
    return (
        <>
            <Carousel />
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="shadow bg-body-tertiary rounded vehicle-section">
                                <div className="vechile">
                                    <p className='pt-2 pb-2 ps-3 m-0'>
                                        FIND PARTS FOR YOUR VEHICLE
                                    </p>
                                </div>

                                <div className='d-flex form-fillter justify-content-between mx-3 pt-2 pb-4'>
                                    <select className="form-select w-25"
                                        defaultValue={'Select Vehical'}
                                        aria-label="Default select example"
                                    >
                                        <option value="Select Vehical"> Select Vehical </option>
                                        <option value="1"> TVS </option>
                                        <option value="2"> HONDA </option>
                                        <option value="3"> HERO </option>
                                    </select>

                                    <select className="form-select w-25 mx-3"
                                        defaultValue={'Select Vehical'}
                                        aria-label="Default select example"
                                    >
                                        <option value="Select Vehical"> Select Mode </option>
                                        <option value="1"> TVS </option>
                                        <option value="2"> HONDA </option>
                                        <option value="3"> HERO </option>
                                    </select>

                                    <select className="form-select w-25"
                                        defaultValue={'Select Vehical'}
                                        aria-label="Default select example"
                                    >
                                        <option value="Select Vehical"> Select Year </option>
                                        <option value="1"> TVS </option>
                                        <option value="2"> HONDA </option>
                                        <option value="3"> HERO </option>
                                    </select>

                                    <select className="form-select w-25 mx-3"
                                        defaultValue={'Select Vehical'}
                                        aria-label="Default select example"
                                    >
                                        <option value="Select Vehical"> Select Engine </option>
                                        <option value="1"> TVS </option>
                                        <option value="2"> HONDA </option>
                                        <option value="3"> HERO </option>
                                    </select>

                                    <button className='btn btn-dark d-flex 
                                       justify-content-center'
                                    >
                                        <div> SEARCH </div>
                                        <FaLongArrowAltRight
                                            className='mt-1 fs-6 text-white ms-1'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        {categories.slice(0, 12).map((category) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0 
                            d-flex flex-column align-items-center" key={category?._id}
                            >
                                <div className="card mb-3 img-card">
                                    <div style={{ margin: 'auto' }}>
                                        <div className="card-body">
                                            <Link className="nav-link"
                                                to={`/product-category/${category.catName.split(' ').join('-')}?id=${category?._id}`}
                                            >
                                                <img src={category?.myImage} width={'100px'}
                                                    alt={category.catName}
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

            <Link to={'/product-category'} className="nav-link text-white">
                <div className='d-flex justify-content-center mt-2'>
                    <button className='btn btn-dark p-2 px-3 d-flex justify-content-center'
                        {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}
                    >
                        <div> {isExpanded ? 'VIEW ALL' : 'VIEW ALL'} </div>
                        <FaLongArrowAltRight className='mt-1 fs-6 text-white ms-2' />
                    </button>
                </div>
            </Link>

            <section className='mt-5 mb-4'>
                <div className='d-flex justify-content-center mb-4'>
                    <div className='container position-relative'>
                        <h1 className="text-center fs-1 fw-bold mb-4">
                            About Us
                        </h1>
                        <img src="../assets/car-logo.png" className='about-logo-car'
                            alt="car-logo"
                        />
                    </div>
                </div>

                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3 mb-sm-0">
                            <img src="../assets/about-banner.png" className='img-fluid rounded'
                                alt="about-banner-image"
                            />

                            <div className='d-flex justify-content-end about mb-3'>
                                <div className="about-logo">
                                    <img src="../assets/phd.png"
                                        alt="phd-image"
                                    />
                                    <img src="../assets/iso.png"
                                        alt="iso-image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3 mb-sm-0 d-flex">
                            <div className='about-content-border me-3'>  </div>
                            <div className='about-content'>
                                <h3> Maruti Suzuki & Hyundai Spare Parts Exporters</h3>
                                <p className='about-first-para'>
                                    Welcome to Pramod Maruti Parts, your one-stop shop for all your
                                    Suzuki car needs. Whether you need Suzuki aftermarket car parts,
                                    Suzuki car replacement parts, Suzuki auto parts, vehicle parts,
                                    Suzuki car genuine parts alternatives, maintenance parts, or
                                    Suzuki repair parts, auto spare accessories, we've got you
                                    covered. Our wide selection of Suzuki car parts, including OEM
                                    quality suzuki car parts, are designed to provide you with the
                                    best quality and performance. Established in 1990, Pramod Auto
                                    Parts Pvt. Ltd. (previously known as Pramod Maruti Parts (Littal)) has emerged as one of the leading trader and supplier of Auto Parts and components suitable for Maruti Suzuki & Hyundai cars in the aftermarket under the brand name LITTAL and have a wide network of Distributors / Dealers in major cities of India as well as abroad.
                                </p>
                                <p style={isOpen ? null : secondPara}>
                                    LITTAL covers spare parts suitable for Indica and Ace car also.
                                    We have also added new generation car parts in our product range.
                                    In the overseas market, LITTAL is a well-known brand in Australia,
                                    New Zealand, Malta, Egypt, Sri Lanka & Nepal etc. LITTAL brand covers
                                    vast variety of small spare parts suiatble for Maruti Suzuki cars
                                    which are likely to replace very frequently. At Pramod Maruti Parts,
                                    we understand the importance of having the right car parts for your
                                    Suzuki. That's why we only offer the best aftermarket and genuine
                                    parts alternatives, ensuring you get your vehicle's best performance
                                    and longevity. Our extensive collection of Suzuki car parts online
                                    includes everything you need for your car's maintenance, repair,
                                    and even accessories to make it look and perform at its best.
                                </p>
                                <Link to={'/about-page'} className="nav-link text-white">
                                    <div >
                                        <button className='btn btn-dark p-2 px-3 d-flex 
                                            justify-content-center'
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <div> {isOpen ? 'READ LESS' : 'READ MORE'} </div>
                                            <FaLongArrowAltRight
                                                className='mt-1 fs-6 text-white ms-2'
                                            />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className='container border-about mt-3 mb-5 shadow'> </div>

            <Testimonial />
            <Enquiry />
            <Blog />
        </>
    )
}

export default HomePage