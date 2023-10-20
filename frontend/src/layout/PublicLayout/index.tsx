import { Outlet } from "react-router-dom";
import { Footer } from "../../components";

const PublicLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
