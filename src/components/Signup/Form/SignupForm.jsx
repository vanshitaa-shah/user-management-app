import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import previewImg from "../../../assets/preview.png";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import { initialValues, validateSchema } from "../FormUtils/FormValidations";
import InputField from "../InputField/InputField";
import Styles from "../Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/authSlice";

const SignupForm = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(previewImg);
  const dispatch = useDispatch();

  const handleProfilePreview = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const onSubmit = (values, onSubmitprops) => {
    const { name, email, phone } = values;
    console.log(profile);
    dispatch(
      authActions.register({
        name: name,
        email: email,
        phone: phone,
        profile: preview,
      })
    );
    onSubmitprops.resetForm();
    setPreview(previewImg);
    navigate("/home");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
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
  );
};

export default SignupForm;
