import { useContext } from "react"

import { ProductsContext } from "../shared/context/products-context"

const Home = () => {
    const products = useContext(ProductsContext)
    console.log(products.products)
    return(
        <div>Home page</div>
    )
}

export default Home