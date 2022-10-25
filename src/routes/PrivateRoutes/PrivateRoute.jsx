import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  console.log(
    "🚀 ~ file: PrivateRoute.jsx ~ line 7 ~ PrivateRoute ~ loading",
    loading
  );

  const location = useLocation();
  console.log(
    "🚀 ~ file: PrivateRoute.jsx ~ line 14 ~ PrivateRoute ~ location",
    location
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (user && user?.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
