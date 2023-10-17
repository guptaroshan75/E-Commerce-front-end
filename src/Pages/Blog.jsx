import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../redux/features/blogSlice';
import { Link } from 'react-router-dom';
import { API } from '../API';

const Blog = () => {
    const dispatch = useDispatch();
    const { loading, blogs } = useSelector(state => state.blog);

    useEffect(() => {
        dispatch(getAllBlogs())
        window.scrollTo(0, 0);
    }, [dispatch])
    
    return (
        <section className='mt-5 mb-5'>
            <div className='d-flex justify-content-center mb-4'>
                <div className='container position-relative blog-section'>
                    <h1 className="text-center fs-1 fw-bold mb-4">
                        Latest Blog
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
                        {blogs.map((blog) => (
                            <div className="col-sm-6 col-lg-4 col-md-4 col-12 mb-3"
                                key={blog?._id}
                            >
                                <div className="card rounded-bottom-0">
                                    <img src={blog?.blogImage}
                                     className="card-img-top" alt={blog?.blogTitle}
                                    />

                                    <div className="card-img-overlay">
                                        <div className='card-date ms-2'>
                                            <h6 className='text-center pt-2'>
                                                {blog?.createdAt.slice(0, 8)}
                                            </h6>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h6 className="card-title"> {blog?.blogTitle} </h6>
                                        <div className="card-text">
                                            <p> {blog?.description} </p>
                                        </div>
                                    </div>
                                </div>

                                <Link className='nav-link'
                                    to={`/specific-blog/${blog?.blogTitle.split(' ').join('-')}?id=${blog?._id}`}
                                >
                                    <button className="btn btn-dark w-100 rounded-top-0 card-button p-2">
                                        Read More
                                        <FaPlus className='fw-bold fs-6 ms-1' />
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section >
    )
}

export default Blog