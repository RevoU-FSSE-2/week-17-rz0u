import "./App.css";
import { Category, CategoryAdd, CategoryEdit, Login, Register } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicLayout } from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/category/edit",
          element: <CategoryEdit />,
        },
        {
          path: "/category/add",
          element: <CategoryAdd />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
