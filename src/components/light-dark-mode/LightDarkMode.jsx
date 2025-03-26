import UseLocalStorage from "./UseLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mood" data-theme={theme}>
      <div className="container">
        <p>hello world!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
