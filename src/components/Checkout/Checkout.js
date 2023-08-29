import { useState } from 'react';

function Checkout() {
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

  const handleSameAsShippingChange = () => {
    setSameAsShipping(!sameAsShipping);
  };

  return (
    <>
    <div>
      <h2>Shipping Information</h2>
        <form>
          <div>
            <label htmlFor="shippingFirstName">First Name:</label>
            <input
              type="text"
              id="shippingFirstName"
              value={shippingFirstName}
              onChange={e => setShippingFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingLastName">Last Name:</label>
            <input
              type="text"
              id="shippingLastName"
              value={shippingLastName}
              onChange={e => setShippingLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingEmail">Shipping Email:</label>
            <input
              type="email"
              id="shippingEmail"
              value={shippingEmail}
              onChange={e => setShippingEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingStreet">Shipping Street:</label>
            <input
              type="text"
              id="shippingStreet"
              value={shippingStreet}
              onChange={e => setShippingStreet(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingSuite">Shipping Suite:</label>
            <input
              type="text"
              id="shippingSuite"
              placeholder="Optional.."
              value={shippingSuite}
              onChange={e => setShippingSuite(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingCity">Shipping City:</label>
            <input
              type="text"
              id="shippingCity"
              value={shippingCity}
              onChange={e => setShippingCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingProvince">Shipping Province:</label>
            <input
              type="text"
              id="shippingProvince"
              value={shippingProvince}
              onChange={e => setShippingProvince(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingCountry">Shipping Country:</label>
            <input
              type="text"
              id="shippingCountry"
              value={shippingCountry}
              onChange={e => setShippingCountry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingPostalCode">Shipping Postal Code:</label>
            <input
              type="text"
              id="shippingPostalCode"
              value={shippingPostalCode}
              onChange={e => setShippingPostalCode(e.target.value)}
              pattern="[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d"
            />
          </div>
          <div>
            <label htmlFor="shippingPhoneNumber">Shipping Phone Number:</label>
            <input
              type="tel"
              id="shippingPhoneNumber"
              value={shippingPhoneNumber}
              onChange={e => setShippingPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="sameAsShipping"
              checked={sameAsShipping}
              onChange={handleSameAsShippingChange}
            />
            <label htmlFor="sameAsShipping">Billing Address the same as Shipping Address?</label>
          </div>

          {!sameAsShipping && (
          <div>
            <h2>Billing Information</h2>
              <div>
                <label htmlFor="billingFirstName">First Name:</label>
                <input
                  type="text"
                  id="billingFirstName"
                  value={billingFirstName}
                  onChange={e => setBillingFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingLastName">Last Name:</label>
                <input
                  type="text"
                  id="billingLastName"
                  value={billingLastName}
                  onChange={e => setBillingLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingEmail">Billing Email:</label>
                <input
                  type="email"
                  id="billingEmail"
                  value={billingEmail}
                  onChange={e => setBillingEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingStreet">Billing Street:</label>
                <input
                  type="text"
                  id="billingStreet"
                  value={billingStreet}
                  onChange={e => setBillingStreet(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingSuite">Billing Suite:</label>
                <input
                  type="text"
                  id="billingSuite"
                  placeholder="Optional.."
                  value={billingSuite}
                  onChange={e => setBillingSuite(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingCity">Billing City:</label>
                <input
                  type="text"
                  id="billingCity"
                  value={billingCity}
                  onChange={e => setBillingCity(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingProvince">Billing Province:</label>
                <input
                  type="text"
                  id="billingProvince"
                  value={billingProvince}
                  onChange={e => setBillingProvince(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingCountry">Billing Country:</label>
                <input
                  type="text"
                  id="billingCountry"
                  value={billingCountry}
                  onChange={e => setBillingCountry(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="billingPostalCode">Billing Postal Code:</label>
                <input
                  type="text"
                  id="billingPostalCode"
                  value={billingPostalCode}
                  onChange={e => setBillingPostalCode(e.target.value)}
                  pattern="[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d"
                />
              </div>
              <div>
                <label htmlFor="billingPhoneNumber">Billing Phone Number:</label>
                <input
                  type="tel"
                  id="billingPhoneNumber"
                  value={billingPhoneNumber}
                  onChange={e => setBillingPhoneNumber(e.target.value)}
                  pattern="[0-9]{10}"
                />
              </div>
          </div>
          )}

          <button type="submit">Submit</button>
        </form>
  </div>
  </>
  )
};
  
  export default Checkout;