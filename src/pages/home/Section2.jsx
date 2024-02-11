import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import { Link } from "react-router-dom";

const Section2 = () => {
  const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Quality Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
  ];

  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} className="text-center">
              <h2>This Burger taste better when you eat it with your family</h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((item, index) => (
              <Col md={6} lg={4} key={index} className="mb-4 mb-md-0">
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
