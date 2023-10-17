import React, { useRef, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { enquiryDetails } from '../redux/features/enquirySlice';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

const GetQuote = () => {
    const recaptchaRef = useRef();
    const dispatch = useDispatch();
    const [captchaVerified, setCaptchaVerified] = useState(false);

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

    const handleCaptchaVerify = () => {
        setCaptchaVerified(true);
    };

    const isValid = Object.values(validationMessages).every((status) => status === 'valid');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid && captchaVerified) {
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
            toast.success('Thank you for your Get Quoted!', {
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
            if (!captchaVerified) {
                alert('Please verify the captcha before submitting the form.');
            }
        }
    }

    return (
        <nav className="navbar navbar-expand-lg main-quote">
            <div className='d-flex flex-column'>
                <div data-bs-toggle="modal" data-bs-target="#getquote">
                    <div className='d-flex justify-content-center mb-2 customer-support'>
                        <img src='../assets/customer-support.png' alt='customer-support'
                            className="align-items-center" width={'50px'}
                        />
                    </div>
                    <div className='d-flex align-items-center quote mx-2'>
                        <div>
                            <strong className='me-1'> GET QUOTE </strong>
                        </div>
                        <div>
                            <MdOutlineDoubleArrow className='fs-6 arrow'
                                style={{ marginBottom: '1px' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="getquote" tabIndex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"
                                >
                                </button>
                            </div>

                            <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                <div className="modal-body pt-4 pb-4">
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

                                    <ReCAPTCHA className='pb-3'
                                        ref={recaptchaRef} onChange={handleCaptchaVerify}
                                        sitekey="6LexfHEoAAAAADgQXtYbG6-TJqjxOchAL-MqsTRG"
                                    />

                                    <button type="submit" data-bs-dismiss={isValid &&
                                        validationMessages.name === 'valid' &&
                                        validationMessages.email === 'valid' &&
                                        validationMessages.number === 'valid' &&
                                        captchaVerified &&
                                        validationMessages.message === 'valid' ? 'modal' : ''
                                    }
                                        className="btn btn-dark w-100" style={{ color: '#ffff18' }}
                                    >
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default GetQuote