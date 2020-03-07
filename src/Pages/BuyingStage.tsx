import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

import StartContext from "../Contexts/StartContext";
import BuyingLocation from "../Components/Start/BuyingLocation";
import StageSlider from "../Components/Start/StageSlider";

const { Title } = Typography;

const BuyingStage = () => {
  const startContext = useContext(StartContext);

  return (
    <>
      <Row style={{ padding: "6rem 0 2rem" }}>
        <Col span={12} offset={6}>
          <Title level={3}>
            To start, lets get a sense of where you are in the home buying
            process
          </Title>
        </Col>
      </Row>
      <Row style={{ padding: "2rem 0" }}>
        <Col span={10} offset={2}>
          <StageSlider />
        </Col>
        <Col span={10}>
          <BuyingLocation />
          <Row style={{ marginTop: "2rem" }}>
            <Link to="/intro/finances">
              <Button type="primary" htmlType="button">
                Continue
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BuyingStage;
