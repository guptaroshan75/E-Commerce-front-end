import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkOutDetails } from '../redux/features/enquirySlice';

const CheckOut = () => {
    const [addCheckOutUser, setCheckOutUser] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvvCode: '',
        userName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    })

    const handleChangeInput = (e) => {
        setCheckOutUser({
            ...addCheckOutUser,
            [e.target.name]: e.target.value,
        });
    };

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkOutDetails(addCheckOutUser));
        setCheckOutUser({
            cardHolderName: '',
            cardNumber: '',
            expiryDate: '',
            cvvCode: '',
            userName: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
        })
    }

    return (
        <section className="checkout p-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <h1 className="mb-3 fs-3"> Fill the following details for shipping.</h1>
                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> Full Name </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required
                                    placeholder='Enter Full Name' onChange={handleChangeInput}
                                    value={addCheckOutUser.userName} name='userName'
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> Email-Id </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required name='email'
                                    placeholder='Enter Email Id' onChange={handleChangeInput}
                                    value={addCheckOutUser.email}
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> Password </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required
                                    placeholder='Enter Your Password' name='password'
                                    value={addCheckOutUser.password}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> Address </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required
                                    placeholder='Enter Your Address' name='address'
                                    value={addCheckOutUser.address}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> City </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required name='city'
                                    placeholder='Enter Your City' value={addCheckOutUser.city}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> State </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required name='state'
                                    placeholder='Enter Your State' value={addCheckOutUser.state}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="row mb-4 align-items-center">
                            <div className="col-sm-3">
                                <label className="col-form-label"> Zip Code </label>
                            </div>
                            <div className="col-sm-9">
                                <input type='text' className="form-control" required
                                    placeholder='Enter Your Zip Code'
                                    value={addCheckOutUser.zipCode}
                                    onChange={handleChangeInput} name='zipCode'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-12 mb-5">
                        <h1 className="mb-4 fs-3"> Payment Method </h1>
                        <div className="card m-auto">
                            <div className="card-body">
                                <h5 className="card-title mb-5 text-center mt-3"> Credit card </h5>
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label">
                                        Holder Name
                                    </label>
                                    <div className="input-group mb-3 w-75">
                                        <div className="input-group-text">
                                            <i className="fa-solid fa-id-card"></i>
                                        </div>
                                        <input type="text" className="form-control" required
                                            placeholder="Card Holder Name" name="cardHolderName"
                                            value={addCheckOutUser.cardHolderName}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label">
                                        Card Number
                                    </label>
                                    <div className="input-group mb-3 w-75">
                                        <div className="input-group-text">
                                            <i className="fa fa-credit-card"></i>
                                        </div>
                                        <input type="number" className="form-control"
                                            placeholder="0000 0000 0000 0000" required
                                            value={addCheckOutUser.cardNumber}
                                            onChange={handleChangeInput} name="cardNumber"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label">
                                        Expiry Date
                                    </label>
                                    <div className="input-group mb-3 w-75">
                                        <div className="input-group-text">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                        <input type="month" className="form-control" name="expiryDate"
                                            placeholder="MM/YY" required onChange={handleChangeInput}
                                            value={addCheckOutUser.expiryDate}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label">
                                        CVC/CVV
                                    </label>
                                    <div className="input-group mb-3 w-75">
                                        <div className="input-group-text">
                                            <i className="fa fa-credit-card"></i>
                                        </div>
                                        <input type="number" className="form-control" required
                                            name="cvvCode" placeholder="000"
                                            value={addCheckOutUser.cvvCode}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                        <button type="submit" className='btn btn-success w-50'>
                            Proceed To Pay
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CheckOut
