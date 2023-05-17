import * as Yup from "yup";
export const initialValues = {
  name: "",
  email: "",
  profile: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const onSubmit = (values, onSubmitprops) => {
  console.log("submitted");
  console.log("Form Data", values);
  onSubmitprops.resetForm();
};

export const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required!";
  }
  if (!values.email) {
    errors.email = "Required!";
  } else if (
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)
  ) {
    errors.email = "Invaild email format!";
  }
  if (!values.phone) {
    errors.phone = "Required!";
  } else if (!/^(\+91|0)?[6789]\d{9}$/.test(values.phone)) {
    errors.phone = "Invalid phone number!";
  }
  if (!values.password) {
    errors.password = "Required!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required!";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password and Confirm password does not match!";
  }
  return errors;
};

export const validateSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string()
    .required("Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),
  phone: Yup.string()
    .required("Required!")
    .matches(/^(\+91|0)?[6789]\d{9}$/, "Invalid phone number!"),
  password: Yup.string().required("Required!"),
  confirmPassword: Yup.string()
    .required("Required!")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm password does not match!"
    ),
});
