import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();
  return (
    <div>
      <button onClick={() => setLanguage("ru")}>Русский</button>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("kg")}>Кыргызча</button>
    </div>
  );
};

export default LanguageSwitcher;
