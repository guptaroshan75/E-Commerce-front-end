import React, { useEffect } from 'react';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return (
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
                            <p>
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
                            <p>
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
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;