import { Link } from "react-router-dom";
import { useCart } from "../../CartContext"

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

    const handleCheckout = () => {
        clearCart();
    }

    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container">
            <h2>Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.map((item) => (
                        <div className="col-md-12" key={item.id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} alt={item.title} className="img-fluid" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">Price: Rs.{item.price}</p>
                                            <div className="d-flex align-items-center ">
                                                <button 
                                                    className="btn btn-outline-success btn-sm me-2"
                                                    onClick={() => removeFromCart(item)}
                                                >
                                                    -
                                                </button>
                                                <p className="card-text me-2 pt-3" >{item.quantity}</p>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p className="card-text">Total: Rs.{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Order Summary</h5>
                        <p>Total Cost: Rs.{totalCost}</p>
                        <Link to="/checkout"  onClick={handleCheckout} className="btn btn-primary">
                            Checkout
                        </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cart