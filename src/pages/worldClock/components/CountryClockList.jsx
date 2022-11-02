import { Row, Col, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CountryClockItem } from './';

export const CountryClockList = () => {
  const { worldClocks } = useSelector(state => state.clocksList);

  return (
    <Row className='justify-content-center mb-3'>
      <Col md={10} lg={7}>
        <ListGroup>
          {worldClocks.map(({ city, clock, date }) => {
            return (
              <CountryClockItem
                key={city}
                city={city}
                date={date}
                clock={clock}
              />
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};
