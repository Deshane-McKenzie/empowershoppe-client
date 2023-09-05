import './ProductPage.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Reviews from '../../components/Reviews/Reviews';
import ProductPageList from '../../components/ProductPageList/ProductPageList';


function ProductPage() {

  const [productDetails, setProductDetails] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const [activeReviews, setActiveReviews] = useState([]);
  const [cart, setCart] = useState([]);

  let updatedCart=[];
  const navigate = useNavigate();
  const {product_id} = useParams();
 
  useEffect(() => {
    axios
    .get('http://localhost:8000/product')
    .then((response) => {
      setProductDetails(response.data);

      const productId = product_id ?? response.data[0].product_id

     return axios.get(`http://localhost:8000/product/${productId}`)

    })
    .then((response) => {
      setActiveProduct(response.data.product || response.data[0])
      setActiveReviews(response.data.reviews)
      })
      .catch((err) => { console.error(err) })
  }, [product_id]);

  // Function to refresh activeReviews
  const refreshActiveReviews = () => {
    axios
      .get(`http://localhost:8000/product/${activeProduct.product_id}`)
      .then((response) => {
        setActiveReviews(response.data.reviews);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (item) => {
    const existingCartItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
    if (existingCartItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.product_id === item.product_id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      updateCart(updatedCart);
    }
    handleCheckout();
  };

  const handleCheckout = () => {
    // Redirect to the checkout page and pass the cart state
   console.log("cart",updatedCart);
    navigate('/checkout', { state: { cart: updatedCart } });
  };


    return (
      <>
      <div>
        <div className="item__container-outer">
          <img src={activeProduct.product_image} className="item__image" alt="Product" />
          <div className="item__container">
            <div className="item__headings">
              <h2 className="item">{activeProduct.title}</h2>
              <h3 className="item__price">${activeProduct.price}.00</h3>
            </div>
            <div className="item__btn-wrapper">
              <button className="item__btn" onClick={() => addToCart(activeProduct)}>Add to Bag</button>
            </div>
              <p className="item__description">{activeProduct.description}</p>
              <Reviews activeReviews={activeReviews} productId={activeProduct.product_id} refreshActiveReviews={refreshActiveReviews} />
          </div>
        </div>
        <ProductPageList productDetails={productDetails}  activeProduct={activeProduct} />
      </div>
      </>
    );
};
  
export default ProductPage;