import './Checkout.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import CloseImage from '../../assets/icons/close.png';


/*
 * Checkout Page design and functionality
*/

function Checkout() {

  const [cartItems, setCartItems] = useState([]);

  const [shippingFirstName, setShippingFirstName] = useState('');
  const [shippingLastName, setShippingLastName] = useState('');
  const [shippingEmail, setShippingEmail] = useState('');
  const [shippingStreet, setShippingStreet] = useState('');
  const [shippingSuite, setShippingSuite] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingProvince, setShippingProvince] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingPostalCode, setShippingPostalCode] = useState('');
  const [shippingPhoneNumber, setShippingPhoneNumber] = useState('');

  const [sameAsShipping, setSameAsShipping] = useState(true);

  const [billingFirstName, setBillingFirstName] = useState('');
  const [billingLastName, setBillingLastName] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [billingStreet, setBillingStreet] = useState('');
  const [billingSuite, setBillingSuite] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingProvince, setBillingProvince] = useState('');
  const [billingCountry, setBillingCountry] = useState('');
  const [billingPostalCode, setBillingPostalCode] = useState('');
  const [billingPhoneNumber, setBillingPhoneNumber] = useState('');


    // Loads the cart from localStorage when the component mounts
    useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }, []);
  
    const removeFromCart = (productId) => {
      const updatedCart = cartItems.filter((product) => product.product_id !== productId);
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

  const handleSameAsShippingChange = () => {
    setSameAsShipping(!sameAsShipping);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Prepares the data to send to the database
    const formData = {
      shipping: {
        firstName: shippingFirstName,
        lastName: shippingLastName,
        email: shippingEmail,
        street: shippingStreet,
        suite: shippingSuite,
        city: shippingCity,
        province: shippingProvince,
        country: shippingCountry,
        postalcode: shippingPostalCode,
        phonenumber: shippingPhoneNumber,
      },
      billing: sameAsShipping
        ? {
            firstName: shippingFirstName,
            lastName: shippingLastName,
            email: shippingEmail,
            street: shippingStreet,
            suite: shippingSuite,
            city: shippingCity,
            province: shippingProvince,
            country: shippingCountry,
            postalcode: shippingPostalCode,
            phonenumber: shippingPhoneNumber,
          }
        : {
            firstName: billingFirstName,
            lastName: billingLastName,
            email: billingEmail,
            street: billingStreet,
            suite: billingSuite,
            city: billingCity,
            province: billingProvince,
            country: billingCountry,
            postalcode: billingPostalCode,
            phonenumber: billingPhoneNumber,
          },
      cart: { cartItems },
    };
  
    // Sends the data to the database
    axios
      .post('http://localhost:8000/api/payment', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Response from API:', response.data);
        if (response.data.checkoutURI) {
          window.location.href = response.data.checkoutURI;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <>
    <div>
      <h2 className="bag__heading">Bag Details</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="bag">
            <div className="bag__container">
            <div className="bag__img-text">
            <div className="bag__item-container">
            <img src={item.product_image} className="item__image bag__item" alt="Product" />
            </div>
            <div className="bag__details">
                <p className="bag__title">{item.title}</p>
                <p className="bag__price">${item.price}</p>
                <p className="bag__quantity">x {item.quantity}</p>
              </div>
              </div>
            <img src={CloseImage} className="bag__item-delete" onClick={() => removeFromCart(item.product_id)} />
            </div>
          </div>
        ))
      ) : (
        <p className="bag__item-none">No items in the bag.</p>
      )}
    </div>

    <div>
      <h2 className="info__heading">Shipping Information</h2>
        <form className="info" onSubmit={handleSubmit}>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingFirstName"></label>
            <input
              type="text"
              className="info__field"
              id="shippingFirstName"
              placeholder="First Name"
              value={shippingFirstName}
              onChange={e => setShippingFirstName(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingLastName"></label>
            <input
              type="text"
              className="info__field"
              id="shippingLastName"
              placeholder="Last Name"
              value={shippingLastName}
              onChange={e => setShippingLastName(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingEmail"></label>
            <input
              type="email"
              className="info__field"
              id="shippingEmail"
              placeholder="Email"
              value={shippingEmail}
              onChange={e => setShippingEmail(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingStreet"></label>
            <input
              type="text"
              className="info__field"
              id="shippingStreet"
              placeholder="Street"
              value={shippingStreet}
              onChange={e => setShippingStreet(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingSuite"></label>
            <input
              type="text"
              className="info__field"
              id="shippingSuite"
              placeholder="Suite (optional)"
              value={shippingSuite}
              onChange={e => setShippingSuite(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingCity"></label>
            <input
              type="text"
              className="info__field"
              id="shippingCity"
              placeholder="City"
              value={shippingCity}
              onChange={e => setShippingCity(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingProvince"></label>
            <input
              type="text"
              className="info__field"
              id="shippingProvince"
              placeholder="Province"
              value={shippingProvince}
              onChange={e => setShippingProvince(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingCountry"></label>
            <input
              type="text"
              className="info__field"
              id="shippingCountry"
              placeholder="Country"
              value={shippingCountry}
              onChange={e => setShippingCountry(e.target.value)}
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingPostalCode"></label>
            <input
              type="text"
              className="info__field"
              id="shippingPostalCode"
              placeholder="Postal Code"
              value={shippingPostalCode}
              onChange={e => setShippingPostalCode(e.target.value)}
              pattern="[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d"
            />
          </div>
          <div className="info__background info__field-wrapper">
            <label htmlFor="shippingPhoneNumber"></label>
            <input
              type="tel"
              className="info__field"
              id="shippingPhoneNumber"
              placeholder="Phone Number"
              value={shippingPhoneNumber}
              onChange={e => setShippingPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
            />
          </div>
          <div className="info__background info__checkbox-wrapper">
            <input
              type="checkbox"
              id="sameAsShipping"
              className="info__checkbox"
              checked={sameAsShipping}
              onChange={handleSameAsShippingChange}
            />
            <label className="info__background" htmlFor="sameAsShipping">Billing Address is the same</label>
          </div>

          {!sameAsShipping && (
          <div className="info__background">
            <h2 className="info__background info__heading">Billing Information</h2>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingFirstName"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingFirstName"
                  placeholder="First Name"
                  value={billingFirstName}
                  onChange={e => setBillingFirstName(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingLastName"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingLastName"
                  placeholder="Last Name"
                  value={billingLastName}
                  onChange={e => setBillingLastName(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingEmail"></label>
                <input
                  type="email"
                  className="info__field"
                  id="billingEmail"
                  placeholder="Email"
                  value={billingEmail}
                  onChange={e => setBillingEmail(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingStreet"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingStreet"
                  placeholder="Street"
                  value={billingStreet}
                  onChange={e => setBillingStreet(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingSuite"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingSuite"
                  placeholder="Suite (optional)"
                  value={billingSuite}
                  onChange={e => setBillingSuite(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingCity"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingCity"
                  placeholder="City"
                  value={billingCity}
                  onChange={e => setBillingCity(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingProvince"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingProvince"
                  placeholder="Province"
                  value={billingProvince}
                  onChange={e => setBillingProvince(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingCountry"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingCountry"
                  placeholder="Country"
                  value={billingCountry}
                  onChange={e => setBillingCountry(e.target.value)}
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingPostalCode"></label>
                <input
                  type="text"
                  className="info__field"
                  id="billingPostalCode"
                  placeholder="Postal Code"
                  value={billingPostalCode}
                  onChange={e => setBillingPostalCode(e.target.value)}
                  pattern="[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d"
                />
              </div>
              <div className="info__background info__field-wrapper">
                <label htmlFor="billingPhoneNumber"></label>
                <input
                  type="tel"
                  className="info__field"
                  id="billingPhoneNumber"
                  placeholder="Phone Number"
                  value={billingPhoneNumber}
                  onChange={e => setBillingPhoneNumber(e.target.value)}
                  pattern="[0-9]{10}"
                />
              </div>
          </div>
          )}
          <div className="info__btn-wrapper">
          <button className="info__btn" type="submit">Checkout</button>
          </div>
        </form>
  </div>
  </>
  )
};
  
  export default Checkout;