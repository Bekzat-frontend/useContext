import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Content = () => {
  const { language, translations } = useLanguage();
  const { isDarkTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#222" : "#fff",
        color: isDarkTheme ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{translations[language].greeting}</h1>
      <p>{translations[language].link}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default Content;
