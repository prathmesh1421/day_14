import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const isAuth = localStorage.getItem("token");

  return isAuth ? children : <Navigate to="/login" replace />;
}

export default AuthRoute;
