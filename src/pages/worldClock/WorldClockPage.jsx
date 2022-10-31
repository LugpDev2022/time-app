import { Container, Row } from 'react-bootstrap';
import { Title } from '../../components';
import { AddCountryForm } from './components/AddCountryForm';

export const WorldClockPage = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Title>World Clock</Title>
      </Row>

      <AddCountryForm />
    </Container>
  );
};
