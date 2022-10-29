import { Col, Container, Row } from 'react-bootstrap';

export const ClockPage = () => {
  const time = '05:07';

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-primary text-center mt-4'>Local Clock</h1>
          </Col>
        </Row>

        <Row className='mt-5'>
          <div className='border rounded-4 border-2 border-primary d-flex align-items-center justify-content-center p-5'>
            <span className='text-primary h1'>{time}</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};
