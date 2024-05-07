import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar";
//import Navbar from "./componets/Navbar.jsx";
import { Hero } from "./componets/Hero/Hero.jsx";
import { About } from "./componets/About/About";
import { Skills } from "./componets/Skills/Skills";
import { Projects } from "./componets/Project/Projects.jsx";
import { Contact } from "./componets/Contact/Contact.jsx";
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
