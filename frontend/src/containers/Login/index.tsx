import axios from "axios";
import { LoginForm } from "../../components";
import { LoginForm as LoginFormProps } from "../../types";
import { BASE_URL } from "../../environment";

const Login = () => {
  const onSubmit = async (values: LoginFormProps) => {
    axios
      .post(`${BASE_URL}/users/login`, {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log("Login successful, Token--------->", response.data.data);
        localStorage.setItem("token", response.data.data);
        window.location.replace("/category");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
