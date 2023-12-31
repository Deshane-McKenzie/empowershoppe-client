import './HomePage.scss';
import { useNavigate } from 'react-router';
import Hero from '../../assets/images/Hero.jpg';
import ShowcaseDesignImage from '../../assets/images/ShowcaseDesign.jpg';
import EasyCheckoutImage from '../../assets/images/EasyCheckout.jpg';


/*
 * Design and Navigation for Home page
 * Mobile 320px / Tablet 768px / Desktop 1280 px
*/

function HomePage() {

  const navigate = useNavigate();

  const handleShopNowNavigation = () => {
    navigate('/product')
  }

    return (
      <>
      <div>
        <div className="hero">
          <img src={Hero} className="hero__img" alt="Hero" />
          <div className="hero--overlay"></div>
            <div className="hero__title-wrapper">
              <h1 className="hero__title">Shop Aspiring Entrepreneur Essential Tools</h1>
              <button className="hero__btn" onClick={handleShopNowNavigation} >Shop Now</button>
            </div>
        </div>
        <h3 className="help__title">How We Help <span className="help">You!</span></h3>
        <div className="help__container-showcase">
          <img src={ShowcaseDesignImage} className="help__img" alt="Showcase Design" />
            <div className="help__showcase-wrapper">
              <h4 className="help__heading">1. Aesthetic and Functional Design Showcase:</h4>
              <p className="help__description">Our e-commerce website not only sells products but also acts as a living example of effective web design and user experience. Aspiring entrepreneurs can explore this website to gain insights into best practices for e-commerce layout, navigation, and aesthetics, setting a high standard for your own online brands.</p>
            </div>
        </div>
        <div className="help__container-checkout">
          <img src={EasyCheckoutImage} className="help__img--hidden" alt="Easy Checkout" />
            <div className="help__checkout-wrapper">
              <h4 className="help__heading-checkout">2. Effortless Checkout Experience:</h4>
              <p className="help__description-checkout">At EmpowerShoppe, we understand that time is of the essence for aspiring entrepreneurs. Our user-friendly checkout process ensures a seamless and hassle-free transaction, allowing entrepreneurs to swiftly secure the tools they need to drive their business forward. With just a few clicks, you can complete your purchase and get back to focusing on what truly matters – building and growing your brand. Streamlined and intuitive, our easy checkout process saves you valuable time and ensures your entrepreneurial journey remains uninterrupted.</p>
            </div>
          <img src={EasyCheckoutImage} className="help__img-checkout" alt="Easy Checkout" />
        </div>
      </div>
      </>
    );
  };
  
  export default HomePage;