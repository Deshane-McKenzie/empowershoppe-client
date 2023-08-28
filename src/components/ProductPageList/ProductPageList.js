import './ProductPageList.scss';
import { Link } from 'react-router-dom';




function ProductPageList({productDetails, activeProduct}) {

    return (
        <>
        <div className="product__container">
            <h2 className="product__section-title">If you need the {activeProduct.title} you might also need these:</h2>
                <ul className="product__list-wrapper"  >
                    {productDetails.filter((product) => product.product_id !== activeProduct.product_id).map((product, product_id) => (
                        <li key={product_id} className="product__list">
                            <Link to={`/product/${product.product_id}`} className="product__link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <div className="product__component">
                                    <div>
                                        <img src={product.product_image} className="product__thumbnail" alt="Product Thumbnail" />
                                    </div>
                                    <div className="product__wrapper">
                                        <h2 className="product">{product.title}</h2>
                                        <h3 className="product__price">${product.price}.00</h3>
                                    </div>
                                </div>
                            </Link>
                        </li>))}
                </ul>
        </div>
        </>
    )
}

export default ProductPageList;