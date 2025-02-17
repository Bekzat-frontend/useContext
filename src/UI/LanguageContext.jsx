import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  ru: { greeting: "Привет, мир!", link: "Ссылка: example" },
  en: { greeting: "Hello, world!", link: "LINK: example" },
  kg: { greeting: "Салам, дүйнө!", link: "ШИЛТЕМЕ: example" },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageProvider, useLanguage };
