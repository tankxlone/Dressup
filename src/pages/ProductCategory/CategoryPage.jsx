import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import { products } from "../../products";
import PropTypes from 'prop-types';


const CategoryPage = ({ category }) => {
  // Filter products based on the category
  const categoryProducts = products.filter((product) => product.category == category);
  
  return (
    <div>
      <Navbar />
      <Products products={categoryProducts} />
    </div>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryPage;
