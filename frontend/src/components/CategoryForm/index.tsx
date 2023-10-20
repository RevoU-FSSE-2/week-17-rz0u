import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Transactions,
  TransactionsApproval as CategoryFormProps,
} from "../../types";
import { initialValues, validationSchema } from "./CategoryFormSchema";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

interface Props {
  onSubmit: (values: CategoryFormProps) => void;
  category?: Transactions;
}

const CategoryForm = ({ onSubmit, category }: Props) => {
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
          TRANSACTIONS APPROVAL
        </Typography>
        <Button variant="text" onClick={() => navigate("/category")}>
          Back
        </Button>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                label="Status"
                defaultOpen
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                size="small"
              >
                <MenuItem disabled value="pending">
                  Pending
                </MenuItem>
                <MenuItem value={"approved"}>Approved</MenuItem>
                <MenuItem value={"rejected"}>Rejected</MenuItem>
                {formik.touched.status && formik.errors.status && (
                  <FormHelperText error>{formik.errors.status}</FormHelperText>
                )}
              </Select>
            </FormControl>

            <IconButton type="submit" disableRipple>
              <AddCircleOutlineIcon sx={{ color: blue[400] }} />
            </IconButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CategoryForm;
