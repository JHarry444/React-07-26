import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional Rendering</Link>
            <Link to="/external">External Data</Link>
        </nav>
    );
}

export default NavBar;