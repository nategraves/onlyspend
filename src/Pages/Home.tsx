import React from "react";
import { Row, Col, Typography, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Container = styled(Row)``;

const Home = () => (
  <Container style={{ paddingTop: "10rem" }}>
    <Col span={12} offset={6}>
      <Title level={1}>Buy like a pro</Title>
      <Title level={2} style={{ marginTop: 0 }}>
        Start your search by figuring out what you can afford.
      </Title>
      <Link to="/intro/buying">
        <Button style={{ marginTop: "1rem" }} type="primary">
          Get Started
        </Button>
      </Link>
    </Col>
    <Col span={4}></Col>
  </Container>
);

export default Home;
