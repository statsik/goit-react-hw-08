import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './LoginForm.css'


const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const LoginForm = () => {
    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const form = e.currentTarget;
  
    //   dispatch(
    //     login({
    //       email: form.elements.email.value,
    //       password: form.elements.password.value,
    //     })
    //   )
    //     .unwrap()
    //     .then(() => {
    //       console.log('login success');
    //     })
    //     .catch(() => {
    //       console.log('login error');
    //     });
  
    //   form.reset();
  // };
  
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      console.log("login success");
      resetForm();
    } catch (error) {
      console.log("login error", error);
    }
  };
  
  return (
    <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={LoginSchema}
    onSubmit={handleSubmit}>
      <Form className="login-container" autoComplete="off">
        <label>
          <p className="login-part">Email</p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </label>
        <label>
          <p className="login-part">Password</p>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </label>
        <button className="login-part" type="submit">Log In</button>
      </Form>
    </Formik>
    );
}

export default LoginForm;