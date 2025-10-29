import { Header, Footer, Home, Aboutme, Skillsinfo } from "./components/index";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <ThemeToggle />
        <Aboutme />
        <Skillsinfo /> {/* ← Секция с id="skills" */}
        <Footer />
      </main>
    </>
  );
}

export default App;
