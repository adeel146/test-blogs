import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./components.scss";
import { Toaster } from "react-hot-toast";
import {
  AnchorButton,
  PasswordInputGroup,
  SubmitButton,
  TextInputGroup,
} from "../common/InputGroup.style";

const LoginCard = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().label("Email").required(),
      password: Yup.string().label("Password").required().min(8).max(35),
    }),
    onSubmit: async (values) => {
      navigate("/blogs");
      localStorage.setItem("isAuthenticated", true);
    },
  });

  return (
    <div className="login-container">
      <Toaster position="top-center" />
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="login-form">
          <TextInputGroup
            width="100%"
            className="input-group"
            label="Email"
            labelWeight={500}
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.errors.email && formik.touched.email ? true : false}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="Error-message align-self-start">
              {formik.errors.email}{" "}
            </div>
          ) : null}
          <div className="mt-4"></div>
          <PasswordInputGroup
            width="100%"
            className="input-group"
            label="Password"
            labelWeight={500}
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={
              formik.errors.password && formik.touched.password ? true : false
            }
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="Error-message d-flex align-self-start">
              {formik.errors.password}{" "}
            </div>
          ) : null}
          <SubmitButton className="input-group" minWidth="100%">
            Submit
          </SubmitButton>
        </div>
      </form>
      <Link to="/create-account">
        <AnchorButton as="a">Create Account</AnchorButton>
      </Link>
      <p>Forget PAssword?</p>
      <Link to="/forgetpassword">
        <AnchorButton as="a">Click Here</AnchorButton>
      </Link>
    </div>
  );
};

export default LoginCard;
