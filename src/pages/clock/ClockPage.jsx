import { Col, Container, Row } from 'react-bootstrap';
import { Box, BigNumber, Title } from '../../components';
import { useLocalClock } from './hooks';

export const ClockPage = () => {
  const { hours, minutes } = useLocalClock();

  return (
    <Box>
      <Container className='h-100 d-flex flex-column justify-content-center'>
        <Row>
          <Col>
            <Title>Local Clock</Title>
          </Col>
        </Row>

        <Row>
          <div className='d-flex justify-content-center'>
            <BigNumber>{`${hours}:${minutes}`}</BigNumber>
          </div>
        </Row>
      </Container>
    </Box>
  );
};
