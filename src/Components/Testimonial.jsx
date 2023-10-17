import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
    return (
        <>
            <section className='gallery-img image-fluid'>
                <div className='container pb-3 pt-5'>
                    <div className='row pt-4'>

                        <div className='col-lg-6 col-md-6 gallery-content'>
                            <div className='position-relative'>
                                <h1 className="text-white fw-bold mb-4">
                                    Our Testimonials
                                </h1>
                                <img src="../assets/car-logo.png"
                                    alt="car-logo"
                                />
                            </div>
                            <p className='text-white'>
                                At Pramod Maruti Parts, we understand the importance of having the
                                right car parts of your Suzuki. That's why we only offer the best
                                aftermarket...
                            </p>
                        </div>

                        <div className='col-lg-6 col-md-6 gallery-rating align-items-end'>
                            <p className='text-white'>
                                Auto Repair in <b className='text-warning'> INDIA </b>
                            </p>
                            <div style={{ marginTop: '-12px' }}>
                                <AiFillStar className='text-warning fs-5 mx-1' />
                                <AiFillStar className='text-warning fs-5' />
                                <AiFillStar className='text-warning fs-5 mx-1' />
                                <AiFillStar className='text-warning fs-5' />
                                <AiFillStar className='text-warning fs-5 mx-1' />

                                <Link className='text-decoration-underline text-white ms-2'>
                                    1157 Reviews
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <div className="shadow bg-body-tertiary rounded avatar-section">
                                <div className="avatar">
                                    <p className='pt-2 pb-2 ps-3 m-0'> </p>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-7 col-md-7'>
                                        <div className='ms-5 pt-4 pb-4 avatar-content'>
                                            <h5>
                                                "We're loving it. After using car service my
                                                business skyrocketed! The service was excellent.
                                                Many fall and spring programs offer similar
                                                shorter programs in the summer, and some may be
                                                combined for a full academic year."
                                            </h5>

                                            <h5 className='mt-3'> HARRIETTA </h5>

                                            <p> 25 Nov, 2022 </p>

                                            <div className='d-flex'>
                                                <div className='position-relative'>
                                                    <img src="../assets/avatar.png"
                                                        className="rounded-circle" alt="Avatar"
                                                    />
                                                    <span className="position-absolute 
                                                        translate-middle p-2 bg-warning border 
                                                        border-light rounded-circle"
                                                    >
                                                        <span className="visually-hidden"> </span>
                                                    </span>
                                                </div>

                                                <div className='position-relative mx-3'>
                                                    <img src="../assets/avatar.png"
                                                        className="rounded-circle" alt="Avatar"
                                                    />
                                                </div>

                                                <div className='position-relative'>
                                                    <img src="../assets/avatar.png"
                                                        className="rounded-circle" alt="Avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-5 position-relative 
                                       avatar-img'
                                    >
                                        <img src="../assets/avatar-1.png" alt='avatar-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            </section>
            <Carousel className='mx-5 carsoul-border shadow'
                infiniteLoop
                showArrows={false}
                renderIndicator={() => { }}
            >
                <div className='d-flex flex-row-reverse mx-4 main-frame'>
                    <img src="../assets/avatar-1.png" width={'50%'} />
                    <div className='avatar-content'>
                        <h5>
                            "We're loving it. After using car service my
                            business skyrocketed! The service was excellent.
                            Many fall and spring programs offer similar
                            shorter programs in the summer, and some may be
                            combined for a full academic year."
                        </h5>
                        <h5 className='pt-2 heading-carsoul'> HARRIETTA </h5>

                        <p> 25 Nov, 2022 </p>
                    </div>
                </div>
                <div className='d-flex flex-row-reverse mx-4 main-frame'>
                    <img src="../assets/avatar-1.png" width={'50%'} />
                    <div className='avatar-content'>
                        <h5>
                            "We're loving it. After using car service my
                            business skyrocketed! The service was excellent.
                            Many fall and spring programs offer similar
                            shorter programs in the summer, and some may be
                            combined for a full academic year."
                        </h5>
                        <h5 className='pt-2 heading-carsoul'> HARRIETTA </h5>

                        <p> 25 Nov, 2022 </p>
                    </div>
                </div>
                <div className='d-flex flex-row-reverse mx-4 main-frame'>
                    <img src="../assets/avatar-1.png" width={'50%'} />
                    <div className='avatar-content'>
                        <h5>
                            "We're loving it. After using car service my
                            business skyrocketed! The service was excellent.
                            Many fall and spring programs offer similar
                            shorter programs in the summer, and some may be
                            combined for a full academic year."
                        </h5>
                        <h5 className='pt-2 heading-carsoul'> HARRIETTA </h5>

                        <p> 25 Nov, 2022 </p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Testimonial