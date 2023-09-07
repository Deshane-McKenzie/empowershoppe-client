import './Header.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FreeShippingIcon from '../../assets/icons/free-shipping.png';
import EmpowerShoppeLogo from '../../assets/logo/empowershoppe-logo.png';
import SignInIcon from '../../assets/icons/sign-in.png';
import AddToCartIcon from '../../assets/icons/add-to-basket.png';
import HamburgerIcon from '../../assets/icons/hamburger.png';
import SearchBarIcon from '../../assets/icons/loupe.png';
import GiftBoxIcon from '../../assets/icons/present-box.png';
import MobileMenu from '../MobileMenu/MobileMenu';


/*
 * Design and Functionality for Header section across all pages
 * Mobile 320px / Tablet 768px / Desktop 1280 px
*/ 

function Header() {

    const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
  
    const handleToggleMenu = () => {
        setMobileMenuOpen(!MobileMenuOpen);
      };

    //Calls for product information from backend and filters through for the name of the product and displays if letter is typed
    const getData = (value) => {
    axios.get("http://localhost:8000/product")
        .then((response) => {
        const filteredResults = response.data.filter((product) => {
            return value && product && product.title && product.title.toLowerCase().includes(value);
        });
        setResults(filteredResults);
        })
        .catch((error) => {
        console.error("Error getting data:", error);
        });
    };

            //Changes state depending on the letter typed in the input section
            const handleChange = (value) => {
                setInput(value);
                getData(value);
            }

            //Resets (closes) search bar after product from the list is clicked
            const handleLinkClick = () => {
                setInput('');
                setResults([]);
            }

                        //Navigation section below:
                        const navigate = useNavigate();

                        const handleHomeNavigation = () => {
                            navigate('/');
                        }

                        const handleShopNavigation = () => {
                        navigate('/product');
                        }

                        const handleAboutNavigation = () => {
                            navigate('/about');
                        }

                        const handleCartNavigation = () => {
                            navigate('/checkout')
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
                    <img src={AddToCartIcon} className="header__add-to-cart" alt="Add to Cart Icon" onClick={handleCartNavigation} />
                    <img src={HamburgerIcon} className="header__menu" alt=" Menu Icon" onClick={() => {setMobileMenuOpen(true)}} />
                    {MobileMenuOpen && (
                    <MobileMenu setMobileMenuOpen={handleToggleMenu} />
                )}
                </div>
            </div>
            <div className="header__search">
                <div className="header__search-wrapper" >
                    <input placeholder="Search for products.." className="header__search-input" value={input} onChange={(e) => {handleChange(e.target.value)}} />
                    <img src={SearchBarIcon} className="header__search-icon" alt="Search Bar Icon" />
                </div>  
            </div>
            <div className="header__search-results">
                    {results.map((result) => {
                        return <Link to={`/product/${result.product_id}`} className="header__search-title" onClick={handleLinkClick}><div key={result.product_id}>{result.title}</div></Link>;
                    })}
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