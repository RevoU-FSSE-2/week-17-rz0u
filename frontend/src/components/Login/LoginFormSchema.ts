import * as Yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = Yup.object({
  username: Yup.string().required("Please fill in your username"),
  password: Yup.string().required("Please fill in your Password"),
});
