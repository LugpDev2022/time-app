import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { resetError } from '../../store/slices/worldClock';
import { AddCountryForm, CountryClockList } from './components';

export const WorldClockPage = () => {
  const dispatch = useDispatch();
  dispatch(resetError());

  return (
    <Container>
      <Row>
        <h1 className='text-center text-primary my-3 h2'>Your Clocks</h1>
      </Row>
      <CountryClockList />
      <AddCountryForm />
    </Container>
  );
};
