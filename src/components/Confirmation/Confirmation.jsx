import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Thank You for Shopping!</h2>
          <p className="card-text">Your order has been successfully placed.</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
