import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { validateCreateListingForm } from "../utils/validateCreateListingForm";
import MultipleFileUpload from "./MultipleFileUpload";

const CreateListingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        farmstandName: "",
        image: "",
        description: "",
        products: [''],
      }}
      onSubmit={handleSubmit}
      validate={validateCreateListingForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="farmstandName">Farmstand Name</Label>
          <Col>
            <Field
              className="form-control"
              name="farmstandName"
              placeholder="farmstand Name"
            />
            <ErrorMessage name="farmstandName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="description">Description</Label>
          <Col>
            <Field
              className="form-control"
              name="description"
              as="textarea"
              rows="12"
            />
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label htmlFor="products">Products For Sale</Label>
          <Col>
            <Field className="form-control" name="products[0]" md="3" />
            <Field className="form-control" name="products[1]" md="3" />
            <Field className="form-control" name="products[2]" md="3" />
            <Field className="form-control" name="products[3]" md="3" />
            <Field className="form-control" name="products[4]" md="3" />
            <Field className="form-control" name="products[5]" md="3" />
            <Field className="form-control" name="products[6]" md="3" />
            <Field className="form-control" name="products[7]" md="3" />
            <Field className="form-control" name="products[8]" md="3" />
            <Field className="form-control" name="products[9]" md="3" />
            <Field className="form-control" name="products[10]" md="3" />
          </Col>
        </FormGroup> */}
        <FormGroup row className='form-control'>
          <label htmlFor="products">Products For Sale</label>
          <Col>
          <FieldArray name='products'>
            {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { products } = values
                return (
                  <div>
                  {products.map((product, index) => (
                    <div key={index}>
                      <Field name={`products[${index}]`}  />
                      {index > 0 && (
                      <button type='button' 
                      onClick={() => remove(index)}>{' '} Remove Product{' '}</button>
                      )}
                      {products.length - 1 === index && (
                      <button type='button' 
                      onClick={() => push('')}>{' '}Add Product{' '}</button>
                      )}
                    </div>
                  ))}
                  </div>
                )
              }
            }

          </FieldArray>
          </Col>
        </FormGroup>
        <FormGroup row>
          <label htmlFor="images">Upload Farmstand Images</label>
          <Col>
            <MultipleFileUpload />
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
              Send Feedback
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default CreateListingForm;
