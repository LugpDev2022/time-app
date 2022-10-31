import { Row, Form, InputGroup, Col, Button } from 'react-bootstrap';

export const AddCountryForm = () => {
  const handleSubmit = e => {
    console.log('sended');
    e.preventDefault();
  };

  return (
    <Row>
      <Form className='mt-3' onSubmit={handleSubmit}>
        <Row className='justify-content-center'>
          <Col md={10} lg={7}>
            <Col xs={12}>
              <InputGroup className='mb-3'>
                <InputGroup.Text
                  id='region-desc'
                  className='bg-dark border-0 text-primary'
                >
                  Region
                </InputGroup.Text>
                <Form.Select
                  aria-label='Region selector'
                  aria-describedby='region-desc'
                  className='bg-dark border-0 text-primary'
                >
                  <option value='america'>America</option>
                  <option value='asia'>Asia</option>
                  <option value='africa'>Africa</option>
                  <option value='australia'>Australia</option>
                  <option value='europe'>Europe</option>
                  <option value='pacific'>Pacific</option>
                  <option value='indian'>Indian</option>
                </Form.Select>
              </InputGroup>
            </Col>

            <Col xs={12}>
              <InputGroup className='mb-3'>
                <InputGroup.Text
                  id='region-desc'
                  className='bg-dark border-0 text-primary'
                >
                  Country
                </InputGroup.Text>
                <Form.Control
                  placeholder='Toronto'
                  aria-label='country'
                  className='bg-dark border-0 text-primary'
                />
              </InputGroup>
            </Col>
            <Col xs={12}>
              <Button
                variant='dark'
                type='submit'
                className='text-primary w-100'
              >
                Add City
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};
