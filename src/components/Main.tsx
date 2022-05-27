import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Main() {
  const mainStyle = {
    margin: {
      marginTop: "100px",
    },

    h2: {
      color: "grey",
    },
    img: {
      borderRadius: "50%",

      width: "250px",
      padding: "10px",

      border: "3px solid grey",
    },
  };
  const [name, setName] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setName(data.results[0].name.last);
        setImage(data.results[0].picture.large);
      });
    });
  }, []);
  return (
    <Container style={mainStyle.margin}>
      <Row>
        <Col>
          <img style={mainStyle.img} src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={mainStyle.h2}>Hi, My name is </h2>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>1 of 4</Col>
      </Row>
    </Container>
  );
}
