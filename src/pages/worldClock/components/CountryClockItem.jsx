import ListGroup from 'react-bootstrap/ListGroup';

export const CountryClockItem = ({ city, clock }) => {
  return (
    <ListGroup.Item className='bg-dark text-primary d-flex justify-content-between'>
      <span>{city}</span>
      <span>{clock}</span>
    </ListGroup.Item>
  );
};
