import * as Yup from "yup";

export const initialValues = {
  amount: "",
  currency: "",
  sourceAccount: "",
  destinationAccount: "",
};

export const validationSchema = Yup.object({
  amount: Yup.number().required("Please fill in the amount"),
  currency: Yup.string().required("Please fill in the currency"),
  sourceAccount: Yup.string().required("Please fill in the source account"),
  destinationAccount: Yup.string().required(
    "Please fill in the destination account"
  ),
});
