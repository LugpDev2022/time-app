import { Col, Container, Row } from 'react-bootstrap';
import { useLocalClock } from '../hooks';

export const ClockPage = () => {
  const { hours, minutes } = useLocalClock();

  return (
    <div className='position-absolute top-50 start-50 translate-middle border rounded-4 border-2 border-primary w-75 p-4'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-primary text-center mb-4'>Local Clock</h1>
          </Col>
        </Row>

        <Row>
          <div className='d-flex align-items-center justify-content-center'>
            <span className='text-primary h1 fw-bold'>{`${hours}:${minutes}`}</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};
