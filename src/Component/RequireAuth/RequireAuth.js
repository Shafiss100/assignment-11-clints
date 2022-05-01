import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <h1>plese wait</h1>
    }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
