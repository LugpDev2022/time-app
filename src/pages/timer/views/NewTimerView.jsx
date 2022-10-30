import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { BigNumber, Title } from '../../../components';
import { ExitButton } from '../components/ExitButton';

export const NewTimerView = () => {
  return (
    <Container>
      <ExitButton />

      <Row>
        <Title>New Timer</Title>
      </Row>
      <Row>
        <div className='d-flex align-items-center justify-content-center'>
          <BigNumber>00:00</BigNumber>
        </div>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} sm={8} md={6} xl={5}>
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
