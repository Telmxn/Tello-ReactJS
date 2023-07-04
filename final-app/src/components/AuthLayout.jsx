import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { token } = useSelector((state) => state.customer);

  return (
    <>
      <Header />
      {token != "" ? <Outlet /> : <Navigate to={"login"} />}
      <Footer />
    </>
  );
};

export default AuthLayout;
