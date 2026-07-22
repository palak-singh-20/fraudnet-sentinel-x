import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {

    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {

        if(theme === "dark"){
            setTheme("light");
        }

        else{
            setTheme("dark");
        }

    }

    return (

        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >

            {theme === "dark" ? "☀️" : "🌙"}

        </button>

    );
}

export default ThemeToggle;