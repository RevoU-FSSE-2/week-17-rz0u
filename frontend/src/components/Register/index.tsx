import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterForm as RegisterFormProps } from "../../types";
import { initialValues, validationSchema } from "./RegisterFormSchema";

interface Props {
  onSubmit: (values: RegisterFormProps) => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: RegisterFormProps) => {
    onSubmit(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const navigate = useNavigate();

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
          Sign Up
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              placeholder="John123"
              size="small"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              size="small"
            />
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                label="Role"
                defaultValue={"maker"}
                value={formik.values.role}
                onChange={formik.handleChange}
                error={formik.touched.role && Boolean(formik.errors.role)}
                size="small"
              >
                <MenuItem value={"approver"}>Approver</MenuItem>
                <MenuItem value={"maker"}>Maker</MenuItem>
                {formik.touched.role && formik.errors.role && (
                  <FormHelperText error>{formik.errors.role}</FormHelperText>
                )}
              </Select>
            </FormControl>
            <Button variant="contained" type="submit">
              Register
            </Button>
          </Box>
        </form>

        <Typography variant="subtitle2" sx={{ m: "1rem" }}>
          Already have an account?
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: "1rem" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
