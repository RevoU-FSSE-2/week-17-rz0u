import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Transactions,
  TransactionFormAdd as CategoryFormProps,
} from "../../types";
import { initialValues, validationSchema } from "./CategoryFormSchema";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

interface Props {
  onSubmit: (values: CategoryFormProps) => void;
  category?: Transactions;
}

const CategoryFormAdd = ({ onSubmit, category }: Props) => {
  const handleSubmit = (values: CategoryFormProps) => {
    onSubmit(values);
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: category ?? initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          maxWidth: "max-content",
          padding: "1rem",
          margin: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ m: "1rem" }}>
          ADD TRANSACTIONS
        </Typography>
        <Button variant="text" onClick={() => navigate("/category")}>
          Back
        </Button>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              name="amount"
              label="Amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
              size="small"
            />
            <TextField
              name="currency"
              label="Currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.currency && Boolean(formik.errors.currency)}
              helperText={formik.touched.currency && formik.errors.currency}
              size="small"
            />
            <TextField
              name="sourceAccount"
              label="Source Account"
              value={formik.values.sourceAccount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.sourceAccount &&
                Boolean(formik.errors.sourceAccount)
              }
              helperText={
                formik.touched.sourceAccount && formik.errors.sourceAccount
              }
              size="small"
            />
            <TextField
              name="destinationAccount"
              label="Destination Account"
              value={formik.values.destinationAccount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.destinationAccount &&
                Boolean(formik.errors.destinationAccount)
              }
              helperText={
                formik.touched.destinationAccount &&
                formik.errors.destinationAccount
              }
              size="small"
            />
            <IconButton type="submit" disableRipple>
              <AddCircleOutlineIcon sx={{ color: blue[400] }} />
            </IconButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CategoryFormAdd;
