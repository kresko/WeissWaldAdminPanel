import { AuthContext } from "../../Auth/AuthContext";
import { useContext } from "react";

function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <nav>
                <a href="/">Home</a>
                {user?.loggedIn ? (
                    <>
                        <a href="/protected">Dashboard</a>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <a href="/login">Login</a>
                )}
            </nav>
        </>
    );
}

export default Header;