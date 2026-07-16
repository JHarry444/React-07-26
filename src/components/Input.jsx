// import { useContext } from "react";
// import { ThemeContext } from "../context";
import { useSelector } from "react-redux";

function Input() {
    // const { theme } = useContext(ThemeContext);
    const theme = useSelector((state) => state.theme);
    return (<input type="text" placeholder="Type something..." style={{ display: "inline" }} className={theme} />);
}

export default Input;