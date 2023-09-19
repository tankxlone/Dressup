import Navbar from "../../components/Navbar/Navbar"
import ImageContainer from "../../components/ImageContainer/ImageContainer"
import Products from "../../components/Products/Products"
import { products } from "../../products"

const Home = () => {
  return (
    <div>
        <Navbar />
        <ImageContainer />
        <Products products={products}/>
    </div>
  )
}

export default Home