import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card>
      <CardImg top height="250px" width="100%" src={product.smallImage} />
      <CardBody>
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          {" "}
          Price : ${product.productPrice}
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
