import { Container, Row } from 'react-bootstrap';
import { Title } from '../../components';
import { AddCountryForm, CountryClockList } from './components';

export const WorldClockPage = () => {
  return (
    <Container>
      <AddCountryForm />
      <CountryClockList />
    </Container>
  );
};
