import { useFormik } from "formik";
import * as Yup from "yup";
const FormTwo = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .matches(/^[A-Za-z]+$/, "Firstname should contain only letters")
        .min(3, "Firstname should be 3 characters or more")
        .required("Firstname Required"),
    }),
  });
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstname">First name</label>
          <input
            className="form-control"
            type="text"
            id="firstname"
            placeholder="First name"
            {...formik.getFieldProps("firstname")}
            name="firstname"
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-danger">{formik.errors.firstname}</div>
          ) : null}

          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
