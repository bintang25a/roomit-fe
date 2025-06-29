import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../../_services/auth";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
   const [authChecked, setAuthChecked] = useState(false);
   const [isAuth, setIsAuth] = useState(false);
   const [user, setUser] = useState(null);
   const location = useLocation();

   useEffect(() => {
      const checkAuth = async () => {
         const result = await isAuthenticated();
         const localUser = JSON.parse(localStorage.getItem("user"));

         setIsAuth(result);
         setUser(localUser);
         setAuthChecked(true);
      };

      checkAuth();
   }, []);

   if (!authChecked) return null;

   if (!isAuth) {
      return <Navigate to="/login" replace state={{ from: location }} />;
   }

   if (requireAdmin && user?.role !== "admin") {
      return <Navigate to="/" replace />;
   }

   return children;
};

export default ProtectedRoute;
