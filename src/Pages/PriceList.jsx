import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/features/categorySlice';
import { Link } from 'react-router-dom';
import { API } from '../API';

const PriceList = () => {
    const dispatch = useDispatch();
    const { loading, categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories())
        window.scrollTo(0, 0);
    }, [dispatch])

    const onButtonClick = () => {
        fetch('1690608381littal_price_list.xlsx').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '1690608381littal_price_list.xlsx';
                alink.click();
            })
        })
    }

    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center mb-2'>
                <div className='container position-relative'>
                    <h2 className="text-center fs-1 fw-bold mb-4 product">
                        Select Category To View Price List
                    </h2>
                    <img src="../assets/car-logo.png" className='car-logo car-logo-price'
                        alt="car-logo"
                    />
                </div>
            </div>

            <div className='text-center mb-5'>
                <button onClick={onButtonClick} className='download-exel'>
                    <h3> Click here to Download Price List </h3>
                </button>
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
                                            to={`/price-list/${category.catName.split(' ').join('-')}?id=${category?._id}`}
                                        >
                                            <img src={category?.myImage}
                                                width={'100px'} alt={category.catName}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link className="nav-link"
                                to={`/price-list/${category.catName.split(' ').join('-')}?id=${category?._id}`}
                            >
                                <h6 className='mb-3 text-center'> {category.catName} </h6>
                            </Link>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </section>
    )
}

export default PriceList