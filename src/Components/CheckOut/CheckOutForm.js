import React from 'react'
import {BiSolidUserCircle} from 'react-icons/bi';
import {MdEmail, MdContactMail, MdLocationCity} from 'react-icons/md';
import Styles from './CheckOutForm.module.scss';

const CheckOutForm = ({
    handleCheckout,
    payload,
    setPayload
  }) => {

    const handleTextChange = (e, payloadLabel) => {
        let newPayload = { ...payload };
        
        if (payload[payloadLabel]) {
          newPayload[payloadLabel] = e.target.value;
        } else {
          newPayload = {
            ...payload,
            [payloadLabel]: e.target.value
          };
        }
    
        setPayload(newPayload);
      };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center overflow-hidden my-3 px-2">
        <div className="container border border-dark p-3 w-75">
            <form 
            onSubmit={(e) => handleCheckout(e)}
            >
                <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                    <div className={`d-flex flex-column justify-content-center align-items-center ${Styles['width-control']}`}>
                        <h3 className="display-6">Billing Address</h3>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">
                            <BiSolidUserCircle className="fs-2" /> Full Name
                            </label>
                            <input
                            className="form-control"
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="John Doe"
                              onChange={(e) => handleTextChange(e, "fullName")}
                            required
                            />
                        </div>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">
                            <MdEmail className="fs-2" /> Email
                            </label>
                            <input
                            className="form-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                              onChange={(e) => handleTextChange(e, "email")}
                            required
                            />
                        </div>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">
                            <MdContactMail className="fs-2" /> Address
                            </label>
                            <input
                            className="form-control"
                            type="text"
                            id="adr"
                            name="address"
                            placeholder="Street No. 12, H. No. 58, Niketan Vihar, Delhi"
                              onChange={(e) => handleTextChange(e, "address")}
                            required
                            />
                        </div>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">
                            <MdLocationCity className="fs-2" /> City
                            </label>
                            <input
                            className="form-control"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="New Delhi"
                              onChange={(e) => handleTextChange(e, "city")}
                            required
                            />
                        </div>

                        <div className="d-flex justify-content-around w-75 py-3">
                            <div className="w-50">
                                <div className="form-group">
                                    <label className="d-block fs-5 pb-2">State</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="New Delhi"
                                      onChange={(e) => handleTextChange(e, "state")}
                                    required
                                    />
                                </div>
                            </div>
                            <div className="px-2"></div>
                            <div className="w-50">
                                <div className="form-group">
                                    <label className="d-block fs-5 pb-2">Zip</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    placeholder="560024"
                                      onChange={(e) => handleTextChange(e, "zip")}
                                    required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`d-flex flex-column justify-content-center align-items-center ${Styles['width-control']}`}>
                        <h3 className="display-6">Payment</h3>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">Name on Card</label>
                            <input
                            className="form-control"
                            type="text"
                            id="cname"
                            name="cardname"
                              onChange={(e) => handleTextChange(e, "nameOnCard")}
                            placeholder="John More Doe"
                            />
                        </div>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">Card number</label>
                            <input
                            className="form-control"
                            type="text"
                            id="ccnum"
                            name="cardnumber"
                              onChange={(e) => handleTextChange(e, "cardnumber")}
                            placeholder="1111-2222-3333-4444"
                            />
                        </div>
                        <div className="form-group w-75 py-3">
                            <label className="d-block fs-5 pb-2">Exp Month</label>
                            <input
                            className="form-control"
                            type="text"
                            id="expmonth"
                            name="expmonth"
                            placeholder="September"
                            />
                        </div>
                        <div className="d-flex justify-content-around w-75 py-3">
                            <div className="w-50">
                                <div className="form-group">
                                    <label className="d-block fs-5 pb-2">Exp Year</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="expyear"
                                    name="expyear"
                                      onChange={(e) => handleTextChange(e, "expYear")}
                                    placeholder="2028"
                                    />
                                </div>
                            </div>
                            <div className="px-2"></div>
                            <div className="w-50">
                                <div className="form-group">
                                    <label className="d-block fs-5 pb-2">CVV</label>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                      onChange={(e) => handleTextChange(e, "cvv")}
                                    placeholder="352"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success d-block mx-auto my-3">Continue to checkout</button>
            </form>
        </div>
    </div>
  )
}

export default CheckOutForm
