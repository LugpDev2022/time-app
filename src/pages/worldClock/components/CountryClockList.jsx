import { Row, Col, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DuplicatedClockAlert, NotCityAlert } from '../ui';
import { CountryClockItem } from './';

export const CountryClockList = () => {
  const { worldClocks, error } = useSelector(state => state.clocksList);

  return (
    <Row className='justify-content-center mb-3'>
      <Col md={10} lg={7}>
        <ListGroup>
          {worldClocks.map(clock => {
            return <CountryClockItem key={clock.city} {...clock} />;
          })}
        </ListGroup>

        {error.isError && error.type === 'Duplicated Clock' ? (
          <DuplicatedClockAlert />
        ) : (
          <></>
        )}

        {error.isError && error.type === 'Not city' ? <NotCityAlert /> : <></>}
      </Col>
    </Row>
  );
};
