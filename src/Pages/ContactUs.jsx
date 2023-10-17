import React, { useEffect } from 'react';
import { BsPinMap } from 'react-icons/bs';
import { PiMapPinLineThin } from 'react-icons/pi';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <section className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7001.733714857484!2d77.229645!3d28.663704999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd08624613cd%3A0xebe43073ed3ecea3!2sPramod%20Auto%20Parts%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1695797874433!5m2!1sen!2sin"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 map-content'>
                        <BsPinMap className='map mb-1' />
                        <h6>
                            1134, Prem Gali, <br />
                            Bara Bazaar, <span> Kashmere Gate, </span> New Delhi - 110006, India
                        </h6>
                    </div>
                </div>
            </section>

            {/* <section className='social-info'>
                <div className='container'>
                    <div className='row aling-items-center'>
                        <div className='col-sm-4'>
                            <PiMapPinLineThin
                                className='border-0 fs-1 p-1 rounded me-3'
                            />
                            <br />
                            <p> Tel:011 - 42758309 </p> <br />
                            <p> Mobile: +91-9810197978 </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default ContactUs