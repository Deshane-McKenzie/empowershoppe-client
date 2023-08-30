import './Header.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FreeShippingIcon from '../../assets/icons/free-shipping.png';
import EmpowerShoppeLogo from '../../assets/logo/empowershoppe-logo.png';
import SignInIcon from '../../assets/icons/sign-in.png';
import AddToCartIcon from '../../assets/icons/add-to-basket.png';
import HamburgerIcon from '../../assets/icons/hamburger.png';
import SearchBarIcon from '../../assets/icons/loupe.png';
import GiftBoxIcon from '../../assets/icons/present-box.png';
import MobileMenu from '../MobileMenu/MobileMenu';


function Header() {

    const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const handleToggleMenu = () => {
        setMobileMenuOpen(!MobileMenuOpen);
      };


    //Navigation section below:
    const navigate = useNavigate();

    const handleHomeNavigation = () => {
        navigate('/');
    }

    const handleShopNavigation = () => {
      navigate('/shop');
    }

    const handleAboutNavigation = () => {
        navigate('/about');
    }


    return (
        <>
        <div className="header">
            <div className="banner__container">
                <div className="banner">
                    <h2 className="banner__title">Enjoy Free Shipping on All Orders! </h2>
                    <img src={FreeShippingIcon} className="banner__icon" alt="Free Shipping Icon"/>
                </div>
            </div>
            <div className="header__wrapper">
                <div className="header__nav">
                    <h2 className="header__nav-1" onClick={handleShopNavigation}>Shop</h2>
                    <h2 className="header__nav-2" onClick={handleAboutNavigation} >About</h2>
                </div>
                <img src={EmpowerShoppeLogo} className="header__logo" alt="EmpowerShoppe Logo" onClick={handleHomeNavigation} />
                <div className="header__icon-wrapper" >
                    <img src={SignInIcon} className="header__sign-in" alt="Sign In Icon" />
                    <img src={AddToCartIcon} className="header__add-to-cart" alt="Add to Cart Icon" />
                    <img src={HamburgerIcon} className="header__menu" alt=" Menu Icon" onClick={() => {setMobileMenuOpen(true)}} />
                    {MobileMenuOpen && (
                    <MobileMenu setMobileMenuOpen={handleToggleMenu} />
                )}
                </div>
            </div>
           
            <div className="header__search">
                <div className="header__search-wrapper" >
                    <input placeholder="Search for products.." className="header__search-input" />
                    <img src={SearchBarIcon} className="header__search-icon" alt="Search Bar Icon" />
                </div>
            </div>
            <div className="header__content-wrapper">
                <img src={GiftBoxIcon} className="header__gift-icon" alt="Gift Box Icon" />
                <h2 className="header__content">Take Advantage of our Essential items with Quality pricing! <span onClick={handleShopNavigation} className="header__content--focus">Shop Now</span></h2>
            </div>
        </div>   
        </>
    );
  };
  
  export default Header;