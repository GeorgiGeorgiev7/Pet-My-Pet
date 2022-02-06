import { useNavigate } from "react-router-dom";
import * as authService from '../../services/auth';
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";


const Logout = () => {
    const navigate = useNavigate();

    const { user, logout } = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            });
    }, []);
    return <p>Loading ...</p>;
};

export default Logout;