import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import previewImg from "../../../assets/preview.png";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import {
  signupValues,
  signupValidateSchema,
} from "../FormUtils/FormValidations";
import InputField from "../InputField/InputField";
import Styles from "../Authentication.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authSlice";
import { useEffect } from "react";
import FormErrors from "../FormUtils/FormErrors";

const SignupForm = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(previewImg);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.isError);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/signup");
    }
  }, [isLoggedIn]);

  const handleProfilePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const onSubmit = (values) => {
    const { name, email, phone, password } = values;
    dispatch(
      authActions.register({
        name: name,
        email: email,
        phone: phone,
        profile: preview,
        password: password,
      })
    );
    setIsRegistered(true);
  };
  return (
    <>
      <Formik
        initialValues={signupValues}
        validationSchema={signupValidateSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={`${Styles.profile} ${Styles.formControl}`}>
              <label htmlFor="profile">Photo +</label>
              <Field
                type="file"
                name="profile"
                id="profile"
                value={undefined}
                onChange={(e) => {
                  setFieldValue("profile", e.currentTarget.files[0]),
                    handleProfilePreview(e);
                }}
                accept="Image/jpg,Image/png"
                hidden
              />
              <img
                name="preview"
                id={Styles.preview}
                src={preview}
                width="50"
                height="50"
                alt=""
              />
              <ErrorMessage name="profile" component={ErrorMsg} />
            </div>

            <InputField name="name" value="Name" type="text" />
            <InputField name="email" value="Email" type="email" />
            <InputField name="phone" value="Phone" type="text" />
            <InputField name="password" value="Password" type="password" />
            <InputField
              name="confirmPassword"
              value="Confirm Password"
              type="password"
            />

            <button type="submit" className={Styles.btn} id={Styles.submitBtn}>
              Signup
            </button>

            <button
              type="reset"
              className={Styles.btn}
              id={Styles.resetBtn}
              onClick={() => setPreview(previewImg)}
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
      {isError && <FormErrors errorMessage={errorMessage} />}
    </>
  );
};

export default SignupForm;