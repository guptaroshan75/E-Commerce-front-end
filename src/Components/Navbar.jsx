import React, { useEffect, useState } from 'react';
import { BiSolidPhoneCall, BiLogoFacebookCircle } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { LiaYoutubeSquare } from 'react-icons/lia';
import { IoIosSearch } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GetQuote from './GetQuote';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchAllProducts } from '../redux/features/productSlice';
import DrawerComp from './DrawerComp';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartCount = useSelector(state => state.cart.cartCount);
    const [searchValue, setSearchValue] = useState('')
    const { searchResults } = useSelector(state => state.products);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim() === '') {
            return;
        }
        dispatch(getSearchAllProducts(searchValue))
        setSearchValue('')
        if (searchResults === 0) {
            navigate('/not-found');
        } else {
            navigate('/search-product');
        }
    }

    return (
        <nav className="bg-dark">
            <div className='d-flex justify-content-around nav-respons'>
                <div>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container d-flex justify-content-lg-between 
                              justify-content-md-center justify-content-sm-between"
                        >
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex support'>
                                    <Link className="navbar-brand text-white fs-6"
                                        to={"#"}
                                    >
                                        <BiSolidPhoneCall className="mx-1 text-warning fs-5" />
                                        +91-9810197978
                                    </Link>
                                    <div className="fs-6 border-end line respons-border">
                                    </div>
                                    <Link className="navbar-brand text-white fs-6 support-email"
                                        to={"#"}
                                    >
                                        <GrMail className="mx-1 text-warning fs-5" />
                                        info@pramodmarutiparts.com
                                    </Link>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className='d-flex align-items-center'>
                                        <div className="navbar-brand text-white fs-6">
                                            Social Media:
                                            <Link to={'https://www.facebook.com/LITTALAUTOPARTS'}
                                                target="_blank"
                                            >
                                                <BiLogoFacebookCircle className="ms-2 text-warning fs-3" />
                                            </Link>
                                            <Link to={'https://www.youtube.com/channel/UCjau6GpOS-DAFiBQZY33m7w'}
                                                target="_blank"
                                            >
                                                <LiaYoutubeSquare className="mx-1 text-warning fs-3" />
                                            </Link>
                                        </div>
                                        <div className="fs-6 border-end line">  </div>
                                        <a className="navbar-brand text-white fs-6" href="#">
                                            <img src='../assets/download.png' alt='logo-flag'
                                                className="me-2" width={'30px'}
                                            />
                                            English
                                        </a>
                                        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle text-white fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src='../assets/download.png' alt='logo-flag' className="me-2" width={'30px'} />
                                                    English
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#"> Hindi </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav className="navbar navbar-expand-lg bg-dark line-bottom">
                        <div className="fs-6 border-bottom container"> </div>
                    </nav>

                    <nav className="navbar navbar-expand-lg bg-dark d-flex mx-4
                      justify-content-sm-between"
                    >
                        <div className='d-flex justify-content-between align-items-center'
                           style={{ width: '95%' }}
                        >
                            <Link className="nav-link text-warning" aria-current="page" to={'/'}>
                                <img src='../assets/logo1.png' alt='logo' className='w-75' />
                            </Link>

                            <form onSubmit={handleSubmit}>
                                <div className='d-flex search-feild'>
                                    <input className="form-control" type="text"
                                        placeholder="Enter Product Code"
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        value={searchValue}
                                    />
                                    <button className='search-icon' type='submit'>
                                        <IoIosSearch className="ms-2 fs-5 text-white" />
                                    </button>
                                </div>
                            </form>

                            <DrawerComp cartCount={cartCount} />
                        </div>

                        {/* <button className="navbar-toggler bg-white ms-5"
                            aria-label="Toggle navigation" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-expanded="false"
                            aria-controls="navbarSupportedContent" type="button"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <NavLink className="nav-link" to={'/'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#ffff',
                                        })}
                                    >
                                        HOME
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/product-category'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        PRODUCTS
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/price-list'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        PRICE
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/gallery'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        GALLERY
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/blog'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        BLOG
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/enquiry'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        ENQUIRY
                                    </NavLink>

                                    <NavLink className="nav-link" to={'/contact'}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#ffff01' : '#fff',
                                        })}
                                    >
                                        CONTACT
                                    </NavLink>

                                    <div className='header-cart'>
                                        <NavLink className="nav-link" to={'/cart-page'}
                                            style={({ isActive }) => ({
                                                color: isActive ? '#ffff01' : '#fff',
                                            })}
                                        >
                                            <span>
                                                <i className='fas fa-shopping-cart mx-2'> </i>
                                            </span>
                                            <span className='cart-count'> {cartCount} </span>
                                        </NavLink>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <GetQuote />
            </div>
        </nav>

        // <>
        //     <nav class="navbar bg-body-tertiary fixed-top">
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="#">Offcanvas navbar</a>
        //             <button class="navbar-toggler d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="offcanvas offcanvas-end d-md-block d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        //                 <div class="offcanvas-header">
        //                     <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        //                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //                 </div>
        //                 <div class="offcanvas-body">
        //                     <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        //                         <li class="nav-item">
        //                             <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a class="nav-link" href="#">Link</a>
        //                         </li>
        //                         <li class="nav-item dropdown">
        //                             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                 Dropdown
        //                             </a>
        //                             <ul class="dropdown-menu">
        //                                 <li><a class="dropdown-item" href="#">Action</a></li>
        //                                 <li><a class="dropdown-item" href="#">Another action</a></li>
        //                                 <li>
        //                                     <hr class="dropdown-divider" />
        //                                 </li>
        //                                 <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                             </ul>
        //                         </li>
        //                     </ul>
        //                     <form class="d-flex mt-3" role="search">
        //                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                         <button class="btn btn-outline-success" type="submit">Search</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </>

    )
}

export default Navbar;