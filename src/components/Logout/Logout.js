import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth';

const Logout = ({
    setUserData
}) => {
    authService.logout();
    setUserData(authService.getCurrentUser());
    return <Navigate to="/login" />;
};

export default Logout;