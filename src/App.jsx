import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Content from "./components/Content";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Content />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
