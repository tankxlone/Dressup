import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">DressUp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catergories
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/category/men" className="dropdown-item">
                  Men
            </Link></li>
            <li><Link to="/category/women" className="dropdown-item">
                  Women
            </Link></li>
          </ul>
        </li>
      </ul>
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge badge-pill bg-primary">{cartCount}</span>
      </Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar