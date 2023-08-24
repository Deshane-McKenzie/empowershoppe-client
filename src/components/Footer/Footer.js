import './Footer.scss';
import EmpowerShoppeLogo from '../../assets/logo/empowershoppe-logo.png'
import LinkedInIcon from '../../assets/icons/linkedin.png';
import GitHubIcon from '../../assets/icons/github.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import TwitterIcon from '../../assets/icons/twitter-sign.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import { useNavigate } from 'react-router-dom';  


function Footer() {

  const navigate = useNavigate();

    const handleReturnNavigation = () => {
      navigate('/return-policy');
    };
    
    const handlePrivacyNavigation = () => {
      navigate('/privacy-policy');
    };

    const handleContactNavigation = () => {
      navigate('/contact');
    };

    const handleLogoNavigation = () => {
      navigate('/')
    }


    return (
      <>
      <div className="footer">
        <div>
          <h2 className="footer__heading" onClick={handleContactNavigation}>- CONTACT -</h2>
        </div>
        <div className="footer__sign-up-wrapper">
          <h2 className="footer__sign-up-heading">Discover Proven Successful Online Business Strategies!</h2>
          <h3 className="footer__sign-up-subheading">We won't share your information with any third parties and you can unsubscribe at any time.</h3>
          <input placeholder="Email.." className="footer__sign-up" />
        </div>
        <div className="footer__links-container">
          <img src={EmpowerShoppeLogo} className="footer__logo" alt="EmpowerShoppe Logo" onClick={handleLogoNavigation} />
            <div className="footer__links">
              <h2 className="footer__return" onClick={handleReturnNavigation}>Return Policy</h2>
              <h2 className="footer__privacy" onClick={handlePrivacyNavigation}>Privacy Policy</h2>
            </div>
        </div>
        <div className="footer__copy-social-wrapper">
          <h3 className="footer__copyright">Copyright &copy; 2023 EmpowerShoppe</h3>
            <div className="footer__social">
              <a href="https://www.linkedin.com/in/deshanemckenzie/" rel="noreferrer" target="_blank"><img src={LinkedInIcon} className="footer__social-linkedin" alt="LinkedIn Icon" /></a>
              <a href="https://github.com/Deshane-McKenzie" rel="noreferrer" target="_blank"><img src={GitHubIcon} className="footer__social-github" alt="Github Icon" /></a>
              <a href="https://www.instagram.com/empowershoppe/" rel="noreferrer" target="_blank"><img src={InstagramIcon} className="footer__social-insta" alt="Instagram Icon" /></a>
              <a href="https://www.twitter.com/empowershoppe/" rel="noreferrer" target="_blank"><img src={TwitterIcon} className="footer__social-twitter" alt="Twitter Icon"/></a>
              <a href="https://www.facebook.com/people/EmpowerShoppe/100095436948215/" rel="noreferrer" target="_blank"><img src={FacebookIcon} className="footer__social-facebook" alt="Facebook Icon" /></a>
            </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Footer;