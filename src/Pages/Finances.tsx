import React, { useContext } from "react";
import { Row, Col, Typography, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";

import StartContext from "../Contexts/StartContext";

const { Title, Text } = Typography;

const Finances = () => {
  const startContext = useContext(StartContext);
  startContext && console.log(startContext.annualIncome);

  return (
    <>
      <Row style={{ padding: "6rem 0 2rem" }}>
        <Col span={12} offset={6}>
          <Title level={3}>
            Let's get a general picture of your financial situation
          </Title>
        </Col>
      </Row>
      {startContext && (
        <>
          <Row style={{ padding: "1rem 0" }}>
            <Col span={12} offset={6}>
              <Text style={{ display: "block" }}>
                What's your average annual income?
              </Text>
              <InputNumber
                style={{ width: "8rem" }}
                min={10000}
                max={1000000}
                value={startContext.annualIncome}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value =>
                  typeof value !== "undefined"
                    ? value.replace(/\$\s?|(,*)/g, "")
                    : ""
                }
                onChange={value =>
                  typeof value !== "undefined" &&
                  startContext.setAnnualIncome(value)
                }
              />
              &nbsp;/year
            </Col>
          </Row>
          <Row style={{ padding: "1rem 0" }}>
            <Col span={12} offset={6}>
              <Text style={{ display: "block" }}>
                What are your average monthly liabilities?
              </Text>
              <InputNumber
                style={{ width: "8rem" }}
                max={100000}
                value={startContext.monthlyDebt}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value =>
                  typeof value !== "undefined"
                    ? value.replace(/\$\s?|(,*)/g, "")
                    : ""
                }
                onChange={value =>
                  typeof value !== "undefined" &&
                  startContext.setMonthlyDebt(value)
                }
              />
              &nbsp;/month
            </Col>
          </Row>
          <Row style={{ padding: "1rem 0" }}>
            <Col span={12} offset={6}>
              <Text style={{ display: "block" }}>
                What are your current savings?
              </Text>
              <InputNumber
                style={{ width: "8rem" }}
                max={10000000}
                value={startContext.savings}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value =>
                  typeof value !== "undefined"
                    ? value.replace(/\$\s?|(,*)/g, "")
                    : ""
                }
                onChange={value =>
                  typeof value !== "undefined" && startContext.setSavings(value)
                }
              />
            </Col>
          </Row>

          <Row style={{ padding: "2rem 0 0" }}>
            <Col span={12} offset={6} style={{ textAlign: "center" }}>
              <Link to="/intro/summary">
                <Button type="primary">Continue</Button>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Finances;
