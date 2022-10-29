import { Container } from 'react-bootstrap';
import { Router } from './router';
import { AppNavbar } from './components';

const App = () => (
  <>
    <AppNavbar />

    <Container>
      <Router />
    </Container>
  </>
);

export default App;
