import { useNavigate } from "react-router-dom";
import { CategoryForm } from "../../components";
import { TransactionsApproval as CategoryFormProps } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../environment";

const CategoryEdit = () => {
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
    axios
      .put(`${BASE_URL}/transactions/approval`, values, {
        headers,
      })
      .then((response) => {
        console.log("Edit Category form values submitted:", response.data);
        console.log("Form values submitted:", values);
      })
      .catch((error) => {
        console.log("Error updating:", error);
      });
  };
  return <CategoryForm onSubmit={handleSubmit} />;
};
export default CategoryEdit;
