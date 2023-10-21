import axios from "axios";
import { CategoryFormAdd } from "../../components";
import { TransactionFormAdd as CategoryFormProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../environment";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const validate = localStorage.getItem("token");
  if (!validate) {
    navigate("/login");
  }
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };

  const handleSubmit = async (values: CategoryFormProps) => {
    console.log("Add Transaction submitted:", values);
    axios
      .post(`${BASE_URL}/transactions`, values, {
        headers,
      })
      .then((response) => {
        console.log("Add Successful", response.data);
        navigate("/category");
      });
  };
  return (
    <>
      <CategoryFormAdd onSubmit={handleSubmit} />;
    </>
  );
};
export default CategoryAdd;
