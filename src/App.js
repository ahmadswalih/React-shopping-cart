import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((arr) => {
      return arr.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      return toast("Already In Cart", { type: "error", position: "top-right" });
    }

    setCartItem([...cartItem, item]);
  };
  const buyNow = () => {
    setCartItem([]);
    toast("Item Purchased Successfully", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addToCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} BuyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
