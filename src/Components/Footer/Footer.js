import React, {Fragment} from 'react';
import {ImInstagram, ImFacebook, ImTwitter} from "react-icons/im";

export const Footer=()=>{
    return(
        <Fragment>
        <div className="container-fluid bg-dark text-white">
            <div className="container p-5">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <h3 className="display-6">Shoppie</h3>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="lead py-2">Contact Us</h5>
                        <p>Phone: <a className="text-white text-decoration-none small" href="tel:+(123) 456-7890">(123) 456-7890</a></p>
                        <p>Email: <a className="text-white text-decoration-none small" href="email:info@shoppie.com">info@shoppie.com</a></p>
                        <p className="small">Timings: Monday till Friday 9 to 5 IST</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="lead py-2">Orders and Returns</h5>
                        <p><a className="text-white text-decoration-none small" href="#">Help and advice</a></p>
                        <p><a className="text-white text-decoration-none small" href="#">Shipping & Returns</a></p>
                        <p><a className="text-white text-decoration-none small" href="#">Refund Policy</a></p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="lead py-2">Pages</h5>
                        <p><a className="text-white text-decoration-none small" href="#">About Us</a></p>
                        <p><a className="text-white text-decoration-none small" href="#">Contact Us</a></p>
                        <p><a className="text-white text-decoration-none small" href="#">Careers</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-white border-top bg-dark border-white">
            <div className="container p-3">
                <div className="row">
                        <div className="col-12 col-md-6 d-flex align-items-end justify-content-center justify-content-md-start">
                            <p className="m-0">© Shoppie.com, Inc. or its affiliates, 2023</p>
                        </div>
                        <div className="col-12 col-md-6 d-md-flex align-items-end justify-content-md-end">
                            <p className="m-0 text-center">
                                <a className="text-white text-decoration-none px-3" href="#">
                                    <ImFacebook/>
                                </a>
                                <a className="text-white text-decoration-none px-3" href="#">
                                    <ImInstagram/>
                                </a>
                                <a className="text-white text-decoration-none px-3" href="#">
                                    <ImTwitter/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
    </Fragment>
    )
}