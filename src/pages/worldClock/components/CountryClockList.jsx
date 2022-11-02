import { Row, Col, ListGroup } from 'react-bootstrap';
import { CountryClockItem } from './';

export const CountryClockList = () => {
  return (
    <Row className='justify-content-center mb-3'>
      <Col md={10} lg={7}>
        <ListGroup>
          <CountryClockItem city='Quebec' clock='05:07' date='2022/11/02' />
        </ListGroup>
      </Col>
    </Row>
  );
};
