import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { BigNumber, Box, Title } from "../../../components";
import { ExitButton } from "../components";

export const NewTimerView = () => {
  const newTimer = "0:00";
  const [isCorrect, setIsCorrect] = useState();

  useEffect(() => {
    if (newTimer !== "0:00") {
      setIsCorrect(false);
      return;
    }
    setIsCorrect(true);
  }, [newTimer]);

  return (
    <Box>
      <Container>
        <ExitButton />

        <Row>
          <Title>New Timer</Title>
        </Row>
        <Row>
          <div className="d-flex align-items-center justify-content-center">
            <BigNumber>{newTimer}</BigNumber>
          </div>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} xl={5}>
            <ButtonGroup aria-label="Timer buttons" className="mb-3 w-100">
              <Button className="p-2">+</Button>
              <Button className="p-2" disabled={isCorrect}>
                Accept
              </Button>
              <Button className="p-2">-</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
