import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const lastnameComponent = ({
  field, // { name, value , onChange, onBlur }
  form: { errors, touched },
  ...props
}) => {
  return (
    <>
      <label htmlFor={field.name}>{props.labelName}</label>
      <br />
      <input className="form-control" type="text" {...field} {...props} />
      {field.value && <div>{field.value}</div>}
      <br />
      {touched[field.name] && errors[field.name] ? (
        <div className="text-danger">{errors[field.name]}</div>
      ) : null}
    </>
  );
};
const FormThree = () => {
  const formikProps = {
    initialValues: {
      firstname: "",
      color: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .matches(/^[A-Za-z]+$/, "Firstname should contain only letters")
        .min(3, "Firstname should be 3 characters or more")
        .required("Firstname Required"),
      lastname: Yup.string()
        .matches(/^[A-Za-z]+$/, "Lastname should contain only letters")
        .min(3, "Lastname should be 3 characters or more")
        .required("Lastname Required"),
    }),
  };
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik {...formikProps}>
          {/* to access formik props if needed */}
          {(formik) => (
            <Form>
              <label htmlFor="firstname">First name</label>
              <Field className="form-control" type="text" name="firstname" />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-danger"
                touched
              />
              {formik.values.firstname}
              <br />
              <label htmlFor="color">Color</label>
              <Field as="select" className="form-control" name="color">
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <hr className="mb-4" />
              <Field
                name="lastname"
                component={lastnameComponent}
                labelName="Enter your Last name"
              />
              <br />
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormThree;
