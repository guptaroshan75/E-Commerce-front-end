import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllBlogs, getSpecificBlog } from '../redux/features/blogSlice';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { API } from '../API';

const SingleBlogPage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');
  
    const dispatch = useDispatch();
    const { blogs, specificBlog } = useSelector(state => state.blog);

    useEffect(() => {
        dispatch(getAllBlogs())
        dispatch(getSpecificBlog(id));
        window.scrollTo(0, 0);
    }, [dispatch, id])

    return (
        <section className='mt-5 mb-4'>
            <div className='d-flex justify-content-center mb-5'>
                <div className='container position-relative'>
                    <h2 className="text-center fs-1 fw-bold">
                        <span className='ms-3'>
                            {specificBlog?.blogTitle.slice(0, 24)}
                        </span>
                    </h2>
                    <img src="../assets/car-logo.png" className='car-logo'
                        alt="car-logo"
                    />
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-lg-8 col-md-7 col-12 mb-3">
                        <h1 className='fw-bold mb-3'> {specificBlog?.blogTitle} </h1>
                        <img src={specificBlog?.blogImage}
                            alt={specificBlog?.blogTitle} className='w-100 image-fluid rounded'
                        />
                        <p className='fs-5 mt-4' style={{ textAlign: 'justify' }}>
                            {specificBlog?.description}
                        </p>
                    </div>

                    <div className="col-sm-12 col-lg-4 col-md-5 col-12 mb-3">
                        <div className="card pt-4 pb-4 border-0" style={{ backgroundColor: '#efeeee'}}>
                            {blogs.map((blog) => (
                                <Link className='nav-link' key={blog?._id}
                                    to={`/specific-blog/${blog?.blogTitle.split(' ').join('-')}?id=${blog?._id}`}
                                >
                                    <div className='d-flex mx-4'>
                                        <div className='me-2 fs-5'>
                                            <LiaGreaterThanSolid />
                                        </div>
                                        <h6 className="card-title" style={{ lineHeight: '30px' }}>
                                            {blog?.blogTitle}
                                        </h6>
                                    </div>
                                    <hr className='mb-1 mx-5 mt-0' />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SingleBlogPage