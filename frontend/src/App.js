import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import HomeScreen from "./screens/HomeScreen"
import CollectionScreen from "./screens/CollectionScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen"
import AboutScreen from "./screens/AboutScreen"
import HowToScreen from "./screens/HowToScreen"
import ProductScreen from "./screens/ProductScreen"
import Switch from "react-bootstrap/esm/Switch"
import CartScreen from "./screens/CartScreen"
import OrderScreen from "./screens/OrderScreen"
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderListScreen from "./screens/OrderListScreen"

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/register" exact component={RegisterScreen} />
            <Route path="/profile" exact component={ProfileScreen} />
            <Route path="/shipping" exact component={ShippingScreen} />
            <Route path="/payment" exact component={PaymentScreen} />
            <Route path="/placeorder" exact component={PlaceOrderScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/how-to" component={HowToScreen} />
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/orders/:id" component={OrderScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />

            <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

            <Route path="/admin/productlist" component={ProductListScreen} exact />
            <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact />
            <Route path="/admin/orderlist" component={OrderListScreen} exact />
            <Route path="/admin/orderlist/:pageNumber" component={OrderListScreen} exact />

            <Route path="/collection/page/:pageNumber" component={CollectionScreen} exact />
            <Route path="/search/:keyword" component={CollectionScreen} exact />
            <Route path="/search/:keyword/page/:pageNumber" component={CollectionScreen} exact />
            <Route path="/collection" component={CollectionScreen} exact />

            <Route path="/" exact component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
