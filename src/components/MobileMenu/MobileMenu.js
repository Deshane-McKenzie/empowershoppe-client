import './MobileMenu.scss';
import { useNavigate } from 'react-router-dom';
import CloseImage from '../../assets/icons/close.png';
import EmpowerShoppeLogo from '../../assets/logo/empowershoppe-logo.png';


/*
 * Modal for the menu tab on Mobile screen size only
 * (child component of the header component)
*/

function MobileMenu({setMobileMenuOpen}) {

    const navigate = useNavigate();

    const handleShopNavigation = () => {
        navigate('/product');
        setMobileMenuOpen('');
    }

    const handleAboutNavigation = () => {
        navigate('/about');
        setMobileMenuOpen('');
    }


    return (
        <>
        {(
        <div className="menu__container">
            <img src={CloseImage} className="menu__close" alt="Close Menu" onClick={() => {setMobileMenuOpen('')}} />
                <div className="menu__logo">
                    <img src={EmpowerShoppeLogo} className="menu" alt="EmpowerShoppe Logo" />
                </div>
                <div className="menu__wrapper">
                    <h2 onClick={handleShopNavigation}>Shop</h2>
                </div>
                <div className="menu__wrapper-2">
                    <h2 className="menu__heading-2" onClick={handleAboutNavigation}>About</h2>
                </div>
        </div>
        )}
        </>
    )
}

export default MobileMenu;