import { useNavigate } from "react-router-dom";
import * as authService from '../../services/auth';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const Logout = () => {
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
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