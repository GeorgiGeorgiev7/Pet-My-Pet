import { Link } from 'react-router-dom';

const Header = ({
    isAuth,
    username
}) => {

    const guestNav = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    const userNav = (
        <div id="user">
            <span>Welcome, {username}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {isAuth ? userNav : guestNav}
                </section>
            </nav>
        </header>
    );
};

export default Header;