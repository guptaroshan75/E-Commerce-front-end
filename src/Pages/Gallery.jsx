import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGallery } from '../redux/features/gallerySlice';
import { API } from '../API';

const Gallery = () => {

    const dispatch = useDispatch();
    const { loading, gallery } = useSelector(state => state.gallery);
    const [selectedGalleryItem, setSelectedGalleryItem] = useState(null)

    useEffect(() => {
        dispatch(getAllGallery())
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center mb-4'>
                <div className='container position-relative blog-section'>
                    <h1 className="text-center fs-1 fw-bold mb-4">
                        Latest Gallery
                    </h1>
                    <img src="../assets/car-logo.png" alt="car-logo" />
                </div>
            </div>

            <div className='container'>
                {loading ? (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="row">
                        {gallery.map((gallery) => (
                            <div className="col-sm-6 col-lg-3 col-md-4 col-12 mb-4"
                                key={gallery?._id}
                            >
                                <div className='pre-box-card'>
                                    <Link onClick={() => setSelectedGalleryItem(gallery?.galleryImage)}
                                        data-bs-toggle="modal" data-bs-target="#galleryModal"
                                    >
                                        <div className="card gallery-section d-block border-0">
                                            <img src={gallery?.galleryImage}
                                                alt={gallery?.imageTitle}
                                                className="card-img-top img-fluid"
                                            />
                                        </div>
                                    </Link>

                                    <div className='gallery-content'>
                                        <strong>
                                            {gallery?.imageTitle}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="modal fade" id="galleryModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true"
            >
                <div className="modal-dialog" style={{ marginLeft: '13%' }}>
                    <div className="card border-0">
                        <img src={selectedGalleryItem} alt={gallery?.imageTitle} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Gallery;