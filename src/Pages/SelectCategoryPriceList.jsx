import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getSpecificCategory, getSpecificCategoryProduct } from '../redux/features/categorySlice';
import { API } from '../API';

const SelectCategoryPriceList = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { specificCategoriesProducts } = useSelector(state => state.category);
    const { specificCategory } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getSpecificCategory(id));
        dispatch(getSpecificCategoryProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    const onButtonClick = () => {
        fetch('LITTAL-Price-List.xlsx').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'LITTAL-Price-List.xlsx';
                alink.click();
            })
        })
    }

    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center mb-2'>
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

            <div className='text-center mb-5'>
                <button onClick={onButtonClick} className='download-exel'>
                    <h3> Click here to Download Price List </h3>
                </button>
            </div>

            <div className='container-fluid'>
                <table className="table table-success table-striped">
                    <thead className='price-head'>
                        <tr>
                            <th scope="col"> Sr No. </th>
                            <th scope="col"> Product Name </th>
                            <th scope="col"> Image </th>
                            <th scope="col"> Ref N0. </th>
                        </tr>
                    </thead>
                    <tbody>
                        {specificCategoriesProducts.map((products, index) => (
                            <tr key={products?._id}>
                                <th scope="row"> {index + 1} </th>
                                <td> {products?.productName} </td>
                                <td>
                                    <Link className="nav-link" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        View Image
                                    </Link>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true"
                                    >
                                        <div className="modal-dialog"
                                            style={{ marginLeft: '49%' }}
                                        >
                                            <div className="card border-0"
                                                style={{ width: 'fit-content' }}
                                            >
                                                <img src={products?.myImage}
                                                    alt={products?.productName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> - </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default SelectCategoryPriceList