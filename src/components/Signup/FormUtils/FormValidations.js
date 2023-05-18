import * as Yup from "yup";
export const initialValues = {
  name: "",
  email: "",
  profile: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const validateSchema = Yup.object({
  name: Yup.string()
    .min(15, "Name should contain atleat 15 characters!")
    .required("Name Required!"),

  email: Yup.string()
    .required("Email Required!")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invaild Email Format!"
    ),
  phone: Yup.string()
    .required("Phone Number Required!")
    .matches(/^(\+91|0)?[6789]\d{9}$/, "Invalid phone number!"),
  password: Yup.string().required("Password Required!"),
  confirmPassword: Yup.string()
    .required("Required!")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm password does not match!"
    ),
  profile: Yup.mixed()
    .test("fileSize", "Image size should be less than 2MB", (value) => {
      if (!value) {
        return true;
      }
      const maxSize = 2 * 1024 * 1024;
      return value.size <= maxSize;
    })
    .test("fileType", "Invalid File Format!(should be jpg or png)", (value) => {
      if (!value) {
        return true;
      }
      const supportedTypes = ["image/jpeg", "image/png"];
      return supportedTypes.includes(value.type);
    })
    .required("Profile photo Required!"),
});
