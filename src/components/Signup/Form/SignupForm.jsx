import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import previewImg from "../../../assets/preview.png";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import {
  initialValues,
  onSubmit,
  validate,
  validateSchema,
} from "../FormUtils/FormValidations";
import InputField from "../InputField/InputField";
import Styles from "../Signup.module.css";

const SignupForm = () => {
  const [preview, setPreview] = useState(previewImg);

  const handleProfilePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
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
