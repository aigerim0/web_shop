import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {commerce} from "./lib/commerce";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutForm from "./components/CheckoutForm";


const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [ order, setOrder] = useState({})
const [ errorMessage, setErrorMessage] = useState('')

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
    }
    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve())
    }
    const handleAddToCart = async (productId, quanitity) => {
        const {cart} = await commerce.cart.add(productId, quanitity)
        setCart(cart)
    }
    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity})

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId)

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty()
        setCart(cart)
    }

    const refreshCart = async  () => {
        const newCart = await  commerce.cart.refresh()
        setCart(newCart)
    }


    const handleCaptureCheckout = async ( checkoutTokenId, newOrder) => {
try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
setOrder(incomingOrder)
    refreshCart()
}catch (error) {
setErrorMessage(error.data.error.message)
}
    }


    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <Router>
            <Switch>
                <div>
                    <Navbar totalItems={cart.total_items}/>

                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path='/cart'>
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                    <CheckoutForm
                        cart={cart}
                    order={order}
                        onCaptureCheckout={ handleCaptureCheckout }
                        error={errorMessage}
                    />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
};

export default App;