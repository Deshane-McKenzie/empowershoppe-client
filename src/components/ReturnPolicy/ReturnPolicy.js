import './ReturnPolicy.scss';


/*
 * Design for Return Policy page (builds customer trust)
 * Mobile 320px / Tablet 768px / Desktop 1280 px
*/ 

function ReturnPolicy() {
  
    return (
      <>
      <div className="return__container">
        <h1 className="return__title">Return Policy</h1>
          <p className="return">At <strong>EmpowerShoppe</strong>, we are committed to providing you with quality products that enhance your experience. We understand that sometimes circumstances change, and we're here to ensure your satisfaction. Please review our return policy below for electronic and other physical items:</p>

            <h2 className="return__subtitle">1. 30-Day Return Window:</h2>
              <p>You have up to 30 days from the date of purchase to initiate a return for eligible items.</p>

            <h2 className="return__subtitle-eligibility">2. Eligibility for Returns:</h2>
              <p>Returns are accepted under the following conditions:</p>
                <ul>
                  <li>The item is damaged upon receiving.</li>
                  <li>The item breaks or malfunctions within the 30-day period.</li>
                  <li>You no longer want the item.</li>
                </ul>

            <h2 className="return__subtitle-process">3. Return Process:</h2>
              <p>To initiate a return, please follow these steps:</p>
                <ul>
                  <li>Contact our customer support team within 30 days of your purchase to request a return authorization.</li>
                  <li>Our team will provide you with a return label and instructions for sending the item back to our warehouse at 324 Sample Street, Toronto, ON M9V 2B8.</li>
                </ul>

            <h2 className="return__subtitle-condition">4. Return Condition:</h2>
              <p>Returned items must be in their original packaging and include all accessories, manuals, and any other components that were included with the purchase.</p>

            <h2 className="return__subtitle-inspection">5. Inspection and Processing:</h2>
              <p>Once the returned item is received at our warehouse, it will be inspected to ensure it meets the return eligibility criteria. We will then process your return and issue the appropriate refund or replacement.</p>

            <h2 className="return__subtitle-refund">6. Refund Options:</h2>
              <p>Refunds will be processed using the same payment method used for the original purchase. Please allow 7-10 business days for the refund to be reflected in your account.</p>

            <h2 className="return__subtitle-exceptions">7. Exceptions:</h2>
              <p>Refunds will not be provided for returned items after the 30-day return window has passed.</p>

            <h2 className="return__subtitle-contact">8. Contact Us:</h2>
              <p>If you have any questions or concerns about our return policy, please feel free to reach out to our customer support team at <a href="mailto:empowershoppe@gmail.com">empowershoppe@gmail.com</a>.</p>

              <p className="return__statement"><em><strong>At EmpowerShoppe</strong>, we value your satisfaction and are dedicated to making your shopping experience as smooth as possible. Thank you for choosing us for your electronic and physical item needs.</em></p>
              <p><strong>Sincerely,</strong><br />EmpowerShoppe Team</p>
      </div>
      </>
    );
  };
  
  export default ReturnPolicy;