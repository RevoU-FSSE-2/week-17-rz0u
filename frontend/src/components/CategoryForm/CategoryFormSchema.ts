import * as Yup from "yup";

export const initialValues = {
  _id: "",
  status: "pending",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Please fill in the name"),
  is_active: Yup.string().required("Please pick the status"),
});
