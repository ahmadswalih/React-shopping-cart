import axios from "axios";
import { Container, Col, Row } from "reactstrap";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "minifaker/locales/en";
import CartItem from "./CartItem";
const apiKey = "Your Api Key";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localUrl = "http://myjson.dit.upm.es/api/bins/5zfb";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhotos = async()=>{
  //     const {data} = await axios.get(url,{
  //         header:{
  //             Authorization:apiKey
  //         }
  //     })
  // }
  const fetchPhotos = async () => {
    const { data } = await axios.get(localUrl);
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.product(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));
    setProduct(allProduct);

    console.log(product);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>

      <Row>
        {product.map((product) => (
          <Col md="4" className="p-2" key={product.id}>
            <CartItem addInCart={addInCart} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
