import { Formik } from "formik";
import * as Yup from "yup";
const FormOne = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string()
          .matches(/^[A-Za-z]+$/, "Firstname should contain only letters")
          .min(3, "Firstname should be 3 characters or more")
          .required("Firstname Required"),
        lastname: Yup.string()
          .matches(/^[A-Za-z]+$/, "Lastname should contain only letters")
          .min(3, "Lastname should be 3 characters or more")
          .required("Lastname Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email Required"),
      })}
      // validate={(values) => {
      //   const errors = {};

      // if (!values.email) {
      //   errors.email = "Email Required";
      // }
      // if (!values.email.includes("@")) {
      //   errors.email = "Invalid email address";
      // }
      // if (!values.firstname) {
      //   errors.firstname = "Firstname Required";
      // }
      // if (!values.firstname.match(/^[A-Za-z]+$/)) {
      //   errors.firstname = "Firstname should contain only letters";
      // }
      // if (!values.firstname.length <= 3) {
      //   errors.firstname = "Firstname should be 3 characters or more";
      // }
      // if (!values.lastname) {
      //   errors.lastname = "Lastname Required";
      // }
      // if (!values.lastname.match(/^[A-Za-z]+$/)) {
      //   errors.lastname = "Lastname should contain only letters";
      // }
      // if (!values.lastname.length <= 3) {
      //   errors.lastname = "Lastname should be 3 characters or more";
      // }
      //   return errors;
      // }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstname && touched.firstname && (
                    <div className="text-danger">{errors.firstname}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && touched.lastname && (
                    <div className="text-danger">{errors.lastname}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormOne;
