import { useCart } from '../../CartContext';
import PropTypes from 'prop-types';

const Products = ({ products }) => {

  const { addToCart } = useCart();

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Product Overview</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" style={{ width: '100%', height: 600 + 'px'}} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs.{product.price}</p>
                <button type="button" className="btn btn-primary" 
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default Products;

Products.propTypes = {
  products: PropTypes.array.isRequired
}
