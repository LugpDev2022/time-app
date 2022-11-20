import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { BigNumber, Box, Title } from "../../../components";
import { ExitButton } from "../components";
import { useNewTimer } from "../hooks";

export const NewTimerView = () => {
  const { newTimer, handleAccept, handleIncrementTimer, handleDecrementTimer } =
    useNewTimer();

  return (
    <Box>
      <Container>
        <ExitButton />

        <Row>
          <Title>New Timer</Title>
        </Row>
        <Row>
          <div className="d-flex align-items-center justify-content-center">
            <BigNumber>{`${newTimer.minutes}:${newTimer.seconds}`}</BigNumber>
          </div>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} xl={5}>
            <ButtonGroup aria-label="Timer buttons" className="mb-3 w-100">
              <Button className="p-2" onClick={handleIncrementTimer}>
                +
              </Button>
              <Button className="p-2" onClick={handleAccept}>
                Accept
              </Button>
              <Button className="p-2" onClick={handleDecrementTimer}>
                -
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
