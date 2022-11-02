import ListGroup from 'react-bootstrap/ListGroup';

export const CountryClockItem = ({ city, clock, date }) => (
  <ListGroup.Item className='bg-dark text-primary d-flex justify-content-between align-items-center'>
    <div className='d-flex flex-column justify-content-center'>
      <span className='fw-light'>{date}</span>
      <span className='fs-4 fw-bold'>{city}</span>
    </div>
    <span className='fw-bolder ms-4 fs-1'>{clock}</span>
  </ListGroup.Item>
);
