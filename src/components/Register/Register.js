import * as AuthService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import ErrorNotification from
    '../Common/ErrorNotification/ErrorNotification';
import { useState } from 'react';


const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const [show, setShow] = useState(false);
    let errMessage = '';


    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        try {
            const data = await AuthService.register(email, password);
            login(data);
            navigate('/');
        } catch (err) {
            errMessage = err.message;
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
            <section id="register-page" className="register">
                <form id="register-form" onSubmit={registerSubmitHandler} method="POST">
                    <fieldset>
                        <legend>Register Form</legend>
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
                        <p className="field">
                            <label htmlFor="repeat-pass">Repeat Password</label>
                            <span className="input">
                                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                            </span>
                        </p>
                        <input className="button submit" type="submit" value="Register" />
                    </fieldset>
                </form>
            </section>
        </>
    );
};

export default Register;