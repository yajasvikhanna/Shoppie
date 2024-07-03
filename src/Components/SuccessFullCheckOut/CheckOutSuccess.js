import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs';
import { useNavigate } from 'react-router';

const CheckOutSuccess = () => {
    const navigate = useNavigate();
    const goToHomePage = () =>{
        navigate('/');
    }
  return (
    <div className="container my-3 d-flex align-items-center justify-content-center flex-column">
      <div>
        <BsCheckCircleFill className="text-success display-1" />
      </div>
      <h4 className="display-6 text-success">Success</h4>
      <p className="text-center">
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>

      <button className="btn btn-outline-success" onClick={goToHomePage}>
        Go To Home Page
      </button>
    </div>
  )
}

export default CheckOutSuccess
