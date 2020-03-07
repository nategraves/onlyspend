import React, { useContext } from "react";
import { Row, Col, Typography, Divider } from "antd";
import styled from "styled-components";

import StartContext from "../Contexts/StartContext";

const { Title, Text } = Typography;

const Spaced = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StartSummary = () => {
  const startContext = useContext(StartContext);

  if (!startContext) {
    return null;
  }

  const { location } = startContext;

  return (
    <Row style={{ padding: "6rem 0 2rem" }}>
      <Col span={18} offset={3}>
        <Title level={2}>Here's a rough look so far:</Title>
        <Divider />
        <Title level={4}>About the area:&nbsp;</Title>
        <Text style={{ display: "block", marginBottom: "1rem" }}>
          {location}
        </Text>
        <Spaced>
          <Text strong>
            Maximum loan amount that qualifies for a federally backed loan:
          </Text>
          <Text style={{ marginLeft: "1rem" }}>
            ${startContext?.annualIncome}
          </Text>
        </Spaced>
        <Spaced>
          <Text strong>
            Maximum loan amount that qualifies for a federally backed loan:
          </Text>
          <Text style={{ marginLeft: "1rem" }}>
            ${startContext?.annualIncome}
          </Text>
        </Spaced>
      </Col>
    </Row>
  );
};

export default StartSummary;
