import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button, ListGroup } from "react-bootstrap"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"
import { createOrderAction } from "../actions/orderActions"
import Meta from "../components/Meta"
import { ORDER_CREATE_RESET } from "../constants/orderConstants"
import CartItems from "../components/CartItems"
import OrderSummary from "../components/OrderSummary"
import { appname } from "../constants/commonConstants"

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  // Calculate prices
  const addDecimals = num => (Math.round(num * 100) / 100).toFixed(2)
  cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + (item.price * item.qty) / 100, 0))
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 26 : 26)
  cart.taxPrice = addDecimals(Number((0.0 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice) + Number(cart.shippingPrice)).toFixed(2)

  const orderCreate = useSelector(state => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order._id}`)
    }
    dispatch({ type: ORDER_CREATE_RESET })
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrderAction({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice
      })
    )
  }
  return (
    <>
      <Meta title={`Place order | | ${appname}`} />
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={9}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col lg={4} md={5} sm={6}>
                  <h4>
                    <nobr>SHIPPING ADDRESS</nobr>
                  </h4>
                </Col>
                <Col>
                  <div>{cart.shippingAddress.address}</div>
                  <div>
                    {cart.shippingAddress.city}, {cart.shippingAddress.zipCode}, {cart.shippingAddress.country}
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col lg={4} md={5} sm={6}>
                  <nobr>
                    <h4>PAYMENT METHOD</h4>
                  </nobr>
                </Col>
                <Col>
                  <div>{cart.paymentMethod && cart.paymentMethod}</div>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>ORDER ITEMS</h4>
              {cart.cartItems.length === 0 ? <Message>Your cart is empty.</Message> : <CartItems cartItems={cart.cartItems} />}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <OrderSummary cart={cart} items={cart.cartItems} error={error}>
          <Button //
            type="button"
            className="btn-block"
            disabled={cart.cartItems.length === 0}
            onClick={placeOrderHandler}
          >
            Place Order and Pay
          </Button>
        </OrderSummary>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
