import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BigNumber, Title } from '../../../components';
import {
  decrementTime,
  toggleRunnig,
} from '../../../store/slices/timer/timerSlice';

export const NormalView = () => {
  const { counter, isRunning } = useSelector(state => state.timer);
  const [intervalId, setIntervalId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
      setIntervalId(interval);
      return;
    }

    clearInterval(intervalId);
  }, [isRunning]);

  return (
    <Container>
      <Row>
        <Title>Timer</Title>
      </Row>
      <Row>
        <div className='d-flex align-items-center justify-content-center'>
          <BigNumber>{`${counter.minutes}:${counter.seconds}`}</BigNumber>
        </div>
      </Row>
      <Row className='justify-content-center align-items-center'>
        <Col xs={6} sm={4} md={3}>
          <Button
            className='w-100 py-2 mb-4'
            onClick={() => dispatch(toggleRunnig())}
          >
            {isRunning ? 'Pause' : 'Play'}
          </Button>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <Link to='/timer/new' className='w-100 py-2 mb-4 btn btn-primary'>
            New
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
