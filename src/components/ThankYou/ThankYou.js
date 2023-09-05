import './ThankYou.scss'
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';


/*
 * Thank you page that includes Order ID once stripe payment is successful 
*/

function ThankYou() {

 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderid');
  const payment = queryParams.get('payment');

        useEffect(() => {
        
            if (payment === 'success') {
            toast.success('Payment successful!', {
                position: toast.POSITION.TOP_CENTER,
            toastId: "success-toast"
            });
            localStorage.removeItem('cart');
            
            } else if (payment === 'failure') {
            toast.error('Payment failed!', {
                position: toast.POSITION.TOP_RIGHT,
            toastId: "success-toast"
            });
            }
        
        }, []);
  

  return (
    <>
      <div>
      <ToastContainer />
        <p className="thank-you">Thank you for your Order!<br />
        It will be delivered shortly.<br />
        Your Order ID is: EMPSHOPPE00-{orderId}</p>
      </div>
    </>
  )
};

export default ThankYou;