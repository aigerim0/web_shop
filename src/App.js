import React, {useState, useEffect} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";




const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const fetchProducts = async () => {
        const { data } = await  commerce.products.list()
        setProducts(data)
    }
    const fetchCart = async  () => {

        setCart( await commerce.cart.retrieve())
    }
    const handleAddToCart = async (productId,quanitity) => {
const item =  await commerce.cart.add(productId,quanitity)
      setCart(item.cart)
    }
    useEffect(() => {
fetchProducts()
        fetchCart()
    },[])
console.log(cart)
    return (
        <Router>
<Switch>
    <div>
        <Navbar totalItems={cart.total_items}/>

        <Route exact path='/'>
            <Products products={products}  onAddToCart={handleAddToCart}/>
        </Route>
        <Route  exact path='/cart'>
            <Cart cart={cart}/>
        </Route>
    </div>
</Switch>
        </Router>
    );
};

export default App;