import * as authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import ErrorNotification from
    '../Common/ErrorNotification/ErrorNotification';
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const [show, setShow] = useState(false);
    const [errMessage, setErrMessage] = useState();

    const onLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            const data = await authService.login(email, password);
            login(data);
            navigate('/');
        } catch (err) {
            setErrMessage(err.message);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1500);
        }
    };

    return (
        <>
            <ErrorNotification
                show={show}
                errMessage={errMessage}
            />
            <section id="login-page" className="login">
                <form id="login-form" onSubmit={onLogin}>
                    <fieldset>
                        <legend>Login Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </span>
                        </p>
                        <input className="button submit" type="submit" value="Login" />
                    </fieldset>
                </form>
            </section>
        </>
    );
};

export default Login;