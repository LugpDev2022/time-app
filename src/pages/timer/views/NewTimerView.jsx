import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';

export const NewTimerView = () => {
  return (
    <Container>
      <Row>
        <h1 className='text-primary text-center mt-4 h4'>New Timer</h1>
      </Row>
      <Row>
        <div className=' d-flex align-items-center justify-content-center my-3'>
          <span className='text-primary h1 fw-bold'>00:00</span>
        </div>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={5} xl={4}>
          <ButtonGroup aria-label='Timer buttons' className='mb-3 w-100'>
            <Button className='p-2'>+</Button>
            <Button className='p-2'>Accept</Button>
            <Button className='p-2'>-</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
