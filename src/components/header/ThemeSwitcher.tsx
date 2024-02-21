import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{themeName}</button>;
}

export default ThemeSwitcher;
