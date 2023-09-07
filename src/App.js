import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Product/ProductPage';
import Checkout from './components/Checkout/Checkout';
import ReturnPolicy from './components/ReturnPolicy/ReturnPolicy';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ThankYou from './components/ThankYou/ThankYou';
import Footer from './components/Footer/Footer';

/*
 * Routes for all pages so they can be accessed while navigating through the website 
 * Mobile 320px / Tablet 768px / Desktop 1280 px
*/

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:product_id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
