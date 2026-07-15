import { useContext } from "react";
import { ThemeContext } from "../context";

function Input() {
    const { theme } = useContext(ThemeContext);

    return (<input type="text" placeholder="Type something..." style={{ display: "inline" }} className={theme} />);
}

export default Input;