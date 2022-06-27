import React from "react";
import {
  Card,
  CardBody,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
  CardImg,
  CardHeader,
  CardFooter,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, BuyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <CardImg height={80} src={item.tinyImage} />
              </Col>
              <Col>
                <div className="text-primary">{item.productName}</div>
                <span> price : {item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove Item
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={BuyNow}>
              Checkout
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h2 className="text-warning">Your Cart is empty</h2>
      )}
    </Container>
  );
};

export default Cart;
