import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductPageList from '../../components/ProductPageList/ProductPageList';
import './ProductPage.scss';

function ProductPage() {

  const [productDetails, setProductDetails] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});

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
      setActiveProduct(response.data)
      console.log(response.data)
    })
    .catch((err) => { console.error(err) })
  }, [product_id]);


    return (
      <>
      <div>
        <img src={activeProduct[0].product_image} className="product-img" alt="Product" />
        <ProductPageList productDetails={productDetails}  activeProduct={activeProduct} />
      </div>
      </>
    );
  };
  
  export default ProductPage;