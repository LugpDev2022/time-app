import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BigNumber, Title } from '../../../components';
import { secondsToMinutes } from '../helpers';

export const NormalView = () => {
  const { counter } = useSelector(state => state.timer);

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
          <Button className='w-100 py-2 mb-4'>Play</Button>
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
