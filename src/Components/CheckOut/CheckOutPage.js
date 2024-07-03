import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import CheckOutForm from './CheckOutForm'

const CheckOutPage = () => {
    const navigate = useNavigate()
    const [payload, setPayload] = useState({});

    const handleCheckout = (e) => {
        e.preventDefault();
        if (payload) {
            console.log("Successfully submitted");
            navigate('/orderplaced');
        }
    };
  return (
    <div>
      <CheckOutForm
        handleCheckout={handleCheckout}
        payload={payload}
        setPayload={setPayload}/>
    </div>
  )
}

export default CheckOutPage
