import axios from "axios";
import { RegisterForm } from "../../components";
import { RegisterForm as RegisterFormProps } from "../../types";
import { BASE_URL } from "../../environment";

const Register = () => {
  const onSubmit = async (values: RegisterFormProps) => {
    axios
      .post(`${BASE_URL}/users/register`, {
        username: values.username,
        role: values.role,
        password: values.password,
      })
      .then((response) => {
        console.log("Register successful", response.data);
        window.location.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
