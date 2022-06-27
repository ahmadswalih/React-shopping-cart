import axios from "axios";
import { Container, Col, Row } from "reactstrap";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "minifaker/locales/en";
import CartItem from "./CartItem";

//you can have your apiKey from the pexels and insert it here or insert it in a dotenv file
const apiKey = "Your Api Key";
//api url : only use if  you are using the official pexels website for data
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

//localUrl from were the json data is stored instead of calling athe original api
//you have to change it to your url : by going to http://myjson.di.upm.es/ website and copy the json data from the pexels.json file(in the component folder)
const localUrl = "https://myjson.dit.upm.es/api/bins/5zfb";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //if you are using api directly from the pexels website then you can-
  // uncomment the following function and -
  //use it instead of below fetchPhot method.

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
