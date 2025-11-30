import Navbar from "./components/navbar/navbar.js"
import Intro from "./components/intro/intro.js"
import Skills from "./components/skills/skills.js"
import Contacts from "./components/contacts/contacts.js"
import Achievements from "./components/achievements/achievements.js"
import Experience from "./components/experience/experience.js"
import Projects from "./components/projects/projects.js"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Achievements/>
        <Contacts/>
        
        <img src="./images/wavesOpacity.svg" alt="footerWaves" className="footerWaves"/>
    </div>
  );
}

export default App;
