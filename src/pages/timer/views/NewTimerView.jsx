import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BigNumber, Box, Title } from "../../../components";
import { setTimer } from "../../../store/slices/timer/timerSlice";
import { ExitButton } from "../components";

export const NewTimerView = () => {
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState();
  const navigate = useNavigate();

  const newTimer = {
    minutes: "0",
    seconds: "20",
  };

  useEffect(() => {
    if (newTimer !== "0:00") {
      setIsCorrect(false);
      return;
    }
    setIsCorrect(true);
  }, [newTimer]);

  const handleAccept = () => {
    const action = {
      minutes: newTimer.minutes,
      seconds: newTimer.seconds,
    };
    dispatch(setTimer(action));
    navigate("/timer");
  };

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
              <Button className="p-2">+</Button>
              <Button
                className="p-2"
                disabled={isCorrect}
                onClick={handleAccept}
              >
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
