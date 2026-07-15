import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context";

function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional Rendering</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/lifting">Lifting State</Link>
            <button onClick={toggleTheme} className={theme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
        </nav>
    );
}

export default NavBar;