import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './RegistrationForm.css';

const RegistrationForm = () => {

    const dispatch = useDispatch();

    const initialValues = { 
        name: "",
        email: "",
        password: "",
      };

    const handleSubmit = (values, {resetForm}) => {
        dispatch(register(values));
        resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      });

    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="registration-form-container" autoComplete="off">
        <label className="registration-form-part">
            <p className="registration-form-name">Username</p>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>
        <label className="registration-form-part">
            <p className="registration-form-name">Email</p>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </label>
        <label className="registration-form-part">
            <p className="registration-form-name">Password</p>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </label>
        <button type="submit">Register</button>
        </Form>
        </Formik>
    )
}

export default RegistrationForm;