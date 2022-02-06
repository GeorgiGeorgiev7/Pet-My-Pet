import * as authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

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
            // TODO: Show notification
            console.log(err.message);
        }
    };

    return (
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
    );
};

export default Login;