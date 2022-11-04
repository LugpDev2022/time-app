import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BigNumber, Box, Title } from '../../../components';
import { useTimer } from '../hooks';

export const NormalView = () => {
  //TODO: Stop timer on changing page
  //TODO: Play a sound on finishing timer

  const { counter, isFinished, isRunning, handlePlay } = useTimer();

  return (
    <Box variant={isFinished ? 'danger' : ''}>
      <Container>
        <Row>
          <Title variant={isFinished ? 'danger' : ''}>Timer</Title>
        </Row>
        <Row>
          <div className='d-flex align-items-center justify-content-center'>
            <BigNumber
              variant={isFinished ? 'danger' : ''}
            >{`${counter.minutes}:${counter.seconds}`}</BigNumber>
          </div>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={6} sm={4} md={3}>
            <Button
              className='w-100 py-2 mb-4'
              onClick={handlePlay}
              disabled={isFinished}
              variant={isFinished ? 'danger' : 'primary'}
            >
              {isRunning ? 'Pause' : 'Play'}
            </Button>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Link
              to='/timer/new'
              className={`w-100 py-2 mb-4 btn btn-${
                isFinished ? 'danger' : 'primary'
              }`}
            >
              New
            </Link>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
