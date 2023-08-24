import './PrivacyPolicy.scss';


function PrivacyPolicy() {
    return (
      <>
      <div className="privacy__container">
        <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy">EmpowerShoppe ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services. By accessing or using our website or services, you agree to the terms of this policy.</p>

            <h2 className="privacy__subtitle">Information We Collect:</h2>
              <p>We collect and store personal information necessary for order processing, delivery, and payment processing. This may include but is not limited to:</p>
            <ul>
              <li>Full name</li>
              <li>Delivery address</li>
              <li>Contact information (email, phone number)</li>
              <li>Payment information (credit card details)</li>
            </ul>

            <h2 className="privacy__subtitle-use">Use of Your Information:</h2>
              <p>We use your personal information solely for the purpose of:</p>
            <ul>
              <li>Processing your order and facilitating its delivery.</li>
              <li>Processing payments for your specific order.</li>
              <li>Communicating order updates and tracking information.</li>
              <li>Responding to your inquiries and providing customer support.</li>
            </ul>

            <h2 className="privacy__subtitle-security">Data Security:</h2>
              <p>We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, or alteration. Credit card information is stored on an order-by-order basis and is encrypted using industry-standard security protocols. Our representatives do not have access to your full credit card information.</p>

            <h2 className="privacy__subtitle-disclosure">Third-Party Disclosure:</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes. Your information is shared only with trusted third parties involved in order processing and delivery (such as shipping companies and payment processors) to fulfill your order.</p>

            <h2 className="privacy__subtitle-retention">Data Retention:</h2>
              <p>Your personal information is retained only for the duration necessary to fulfill the purpose for which it was collected, including legal or regulatory requirements.</p>

            <h2 className="privacy__subtitle-choices">Your Choices:</h2>
              <p>You have the right to access, update, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us at any time.</p>

            <h2 className="privacy__subtitle-children">Children's Privacy:</h2>
              <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

            <h2 className="privacy__subtitle-changes">Changes to this Privacy Policy:</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices. The latest version will always be available on our website.</p>

            <h2 className="privacy__subtitle-contact">Contact Us:</h2>
              <p>If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:empowershoppe@gmail.com">empowershoppe@gmail.com</a>.</p>

              <p className="privacy__updated"><em>Last Updated: September 10th, 2023</em></p>
              <p><strong>Sincerely,</strong><br />EmpowerShoppe Team</p>
      </div>
      </>
    );
  };
  
  export default PrivacyPolicy;