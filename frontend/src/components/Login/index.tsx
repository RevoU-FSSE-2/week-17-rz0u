import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginForm as LoginFormProps } from "../../types";
import { initialValues, validationSchema } from "./LoginFormSchema";

interface Props {
  onSubmit: (values: LoginFormProps) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: LoginFormProps) => {
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
          Sign In
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
              placeholder="john123"
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

            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
        <Typography variant="subtitle2" sx={{ m: "1rem" }}>
          Dont have an account?
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: "1rem" }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginForm;
