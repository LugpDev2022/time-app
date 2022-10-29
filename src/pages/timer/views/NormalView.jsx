import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NormalView = () => {
  return (
    <Container>
      <Row>
        <h1 className='text-primary text-center mt-4 h2'>Timer</h1>
      </Row>
      <Row>
        <div className=' d-flex align-items-center justify-content-center my-4'>
          <span className='text-primary h1'>00:00</span>
        </div>
      </Row>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={5} xl={4}>
          <Button className='w-100 py-3 mb-4'>Play</Button>
        </Col>
        <Col xs={12} md={5} xl={4}>
          <Link to='/timer/new' className='w-100 py-3 mb-4 btn btn-primary'>
            New
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
