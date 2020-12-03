import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import { saveShippingAddressAction } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitShippingHandler = e => {
    e.preventDefault()
    console.log("submitShippingHandler")
    dispatch(saveShippingAddressAction({ address, city, zipCode, country }))
    history.push("/payment")
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitShippingHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control //
            type="text"
            placeholder="Enter Address"
            value={address}
            required
            onChange={e => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control //
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={e => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control //
            type="text"
            placeholder="Enter ZipCode"
            value={zipCode}
            required
            onChange={e => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control //
            type="text"
            placeholder="Enter Country"
            value={country}
            required
            onChange={e => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
