import { Row, Col, ListGroup } from 'react-bootstrap';
import { CountryClockItem } from './';
import { Subtitle } from '../../../components';

export const CountryClockList = () => {
  return (
    <Row className='justify-content-center mt-5'>
      <Col md={10} lg={7}>
        <Subtitle>Your Clocks</Subtitle>
        <ListGroup>
          <CountryClockItem city='Quebec' clock='05:07' />
          <CountryClockItem city='Toronto' clock='11:40' />
          <CountryClockItem city='Tokio' clock='23:31' />
        </ListGroup>
      </Col>
    </Row>
  );
};
