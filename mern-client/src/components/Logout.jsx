import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        alert("An error occurred while logging out. Please try again.");
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <div
        className="bg-red-700 px-8 py-2 text-white rounded cursor-pointer"
        role="button"
        tabIndex="0"
        onClick={handleLogout}
      >
        LogOut
      </div>
    </div>
  );
};

export default Logout;
