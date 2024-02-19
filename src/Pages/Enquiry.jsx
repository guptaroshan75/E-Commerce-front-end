import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { enquiryDetails } from '../redux/features/enquirySlice';
import { toast } from 'react-toastify';

const Enquiry = () => {
    const [addEnquir, setAddEnquir] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    })

    const [validationMessages, setValidationMessages] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setAddEnquir({
            ...addEnquir,
            [name]: value,
        });
        setValidationMessages({
            ...validationMessages,
            [name]: value.trim() ? 'valid' : 'invalid',
        });
    };

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(validationMessages).every((status) => status === 'valid');
        if (isValid) {
            setAddEnquir({
                name: '',
                email: '',
                number: '',
                message: '',
            });
            setValidationMessages({
                name: '',
                email: '',
                number: '',
                message: '',
            });
            toast.success('Thank You For Your Submission!', {
                position: toast.POSITION.TOP_CENTER
            });
            dispatch(enquiryDetails(addEnquir));
        } else {
            setValidationMessages({
                name: addEnquir.name ? 'valid' : 'invalid',
                email: addEnquir.email ? 'valid' : 'invalid',
                number: addEnquir.number ? 'valid' : 'invalid',
                message: addEnquir.message ? 'valid' : 'invalid',
            });
        }
    };

    return (
        <section className='container-fluid mb-5 mt-3'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 enquiry-img d-flex justify-content-center
                   flex-column'
                >
                    <div className='d-flex justify-content-center enquiry-content'>
                        <span className='text-white me-2'>
                            GET
                        </span>
                        <h1 className="text-white fw-bold">
                            10%
                        </h1>
                        <span className='text-white d-flex align-items-end'>
                            OFF
                        </span>
                    </div>

                    <div className="enquiry-second-content 
                       justify-content-center"
                    >
                        <div className='d-flex align-items-center mx-5'>
                            <div className='border-bottom' style={{ width: '17%' }}> </div>
                            <div>
                                <h1 className='mx-2 mt-3'> We Deal in These Cars </h1>
                            </div>
                            <div className='border-bottom' style={{ width: '17%' }}> </div>
                        </div>

                    </div>

                    <div className='mt-3 enquiry-third-content '>
                        <p className='mx-5 text-white text-center'>
                            ALTO | CAR 800 | ALTO K-10 | SWIFT | SX4 | ZEN | SWIFT DZIRE |
                            GYPSY 410 | GYPSY 413 | SAMURAI 4/4 | SANTANA | CIAZ | RITZ/SPLASH |
                            CELERIO | A STAR | ALTO 800
                        </p>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 enquiry-field-img'>
                    <div className='container pt-5 ps-5 position-relative'>
                        <div className='position-relative enquiry-field-content'>
                            <h1 className="text-black fs-1 fw-bold">
                                QUICK ENQUIRY
                            </h1>
                            <img src="../assets/car-logo.png"
                                alt="car-logo"
                            />
                        </div>
                        <p className='pt-3' id='enquiry-para'>
                            If You have any Queries Kindly take a moment to fill up this form,
                            Our representativers will contact you shortly.
                        </p>

                        <form className='needs-validation' noValidate
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group mb-4">
                                <input type="text" required value={addEnquir.name}
                                    className={`form-control 
                                      ${validationMessages.name === 'invalid' ? 'is-invalid' : ''}`
                                    } onChange={handleChangeInput}
                                    placeholder='Your Name' name='name'
                                />
                                <div className={validationMessages.name === 'invalid' ?
                                    'invalid-feedback' : ''}
                                >
                                    {validationMessages.name === 'invalid' ?
                                        ('Name is a required') : null
                                    }
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <input type="text" value={addEnquir.email} required
                                    className={`form-control 
                                      ${validationMessages.email === 'invalid' ? 'is-invalid' : ''}`
                                    } onChange={handleChangeInput}
                                    placeholder='Email' name='email'
                                />
                                <div className={validationMessages.email === 'invalid' ?
                                    'invalid-feedback' : ''}
                                >
                                    {validationMessages.email === 'invalid' ?
                                        ('Email-Id is a required') : null
                                    }
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <input type="number" value={addEnquir.number} required
                                    className={`form-control 
                                      ${validationMessages.number === 'invalid' ? 'is-invalid' : ''}`
                                    } onChange={handleChangeInput}
                                    placeholder='Phone Number' name='number'
                                />
                                <div className={validationMessages.number === 'invalid' ?
                                    'invalid-feedback' : ''}
                                >
                                    {validationMessages.number === 'invalid' ?
                                        ('Phone Number is a required') : null
                                    }
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <textarea value={addEnquir.message} required name='message'
                                    rows="4" className={`form-control 
                                      ${validationMessages.message === 'invalid' ? 'is-invalid' : ''}`
                                    } onChange={handleChangeInput}
                                    placeholder="Your Text Here..."
                                >
                                </textarea>
                                <div className={validationMessages.message === 'invalid' ?
                                    'invalid-feedback' : ''}
                                >
                                    {validationMessages.message === 'invalid' ?
                                        ('Message is a required') : null
                                    }
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='btn btn-dark d-flex 
                              justify-content-center my-5' type='submit'
                            >
                                SUBMIT
                                <FaLongArrowAltRight
                                    className='mt-1 fs-6 text-white ms-2'
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enquiry