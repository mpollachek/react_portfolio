import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCreateListingForm } from '../utils/validateCreateListingForm';

const CreateListingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('form values:', values);
    console.log('in JSON format:', JSON.stringify(values));
    resetForm();
  }
  return(
    <Formik
    initialValues={{
      farmstandName: '',
      image: '',
      description: '',
      products: [],
    }}
    onSubmit={handleSubmit}
    validate={validateCreateListingForm}
  >
    <Form>
      <FormGroup row>
      <Label htmlFor='farmstandName' >
                Farmstand Name 
            </Label>  
            <Col>
              <Field className='form-control' name='farmstandName' placeholder='farmstand Name' />
              <ErrorMessage name='farmstandName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
              </ErrorMessage>
            </Col>
      </FormGroup>
      <FormGroup row>
            <Label htmlFor='description'>
                Description
            </Label>
            <Col>
            <Field className='form-control' name='description' as='textarea' rows='12' />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor='products'>
                Products For Sale
            </Label>
            <Col>
            <Field className='form-control' name='products' as='textarea' rows='12' />
            </Col>
        </FormGroup>
    // Next is upload image


    </Form>


  </Formik>
  );
}

export default CreateListingForm;