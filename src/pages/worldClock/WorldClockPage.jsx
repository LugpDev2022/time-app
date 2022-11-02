import { Container, Row } from 'react-bootstrap';
import { AddCountryForm, CountryClockList } from './components';

export const WorldClockPage = () => {
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
