import { Row, Form, InputGroup, Col, Button } from 'react-bootstrap';
import { useCountryForm } from '../hooks';

export const AddCountryForm = () => {
  const { countrySelect, handleSubmit, city, handleInputChange } =
    useCountryForm();

  return (
    <Row>
      <Form className='mt-3' onSubmit={handleSubmit}>
        <Row className='justify-content-center'>
          <Col md={10} lg={7}>
            <Col xs={12}>
              <InputGroup className='mb-3'>
                <InputGroup.Text
                  id='region-desc'
                  className='bg-dark border-0 text-primary fs-4'
                >
                  Region
                </InputGroup.Text>
                <Form.Select
                  aria-label='Region selector'
                  aria-describedby='region-desc'
                  className='bg-dark border-0 text-info fs-4'
                  ref={countrySelect}
                >
                  <option value='America'>America</option>
                  <option value='Asia'>Asia</option>
                  <option value='Africa'>Africa</option>
                  <option value='Australia'>Australia</option>
                  <option value='Europe'>Europe</option>
                  <option value='Pacific'>Pacific</option>
                  <option value='Indian'>Indian</option>
                </Form.Select>
              </InputGroup>
            </Col>

            <Col xs={12}>
              <InputGroup className='mb-3'>
                <InputGroup.Text
                  id='region-desc'
                  className='bg-dark border-0 text-primary px-4 fs-4'
                >
                  City
                </InputGroup.Text>
                <Form.Control
                  aria-label='country'
                  className='bg-dark border-0 text-info fs-4'
                  onChange={handleInputChange}
                  placeholder='Toronto'
                  value={city}
                />
              </InputGroup>
            </Col>
            <Col xs={12}>
              <Button
                variant='dark'
                type='submit'
                className='text-primary w-100 fs-4'
              >
                Add Clock
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};
