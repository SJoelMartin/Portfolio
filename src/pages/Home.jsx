import "../index.css"
import Navbar from "../components/Navbar"
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Activities from "../components/Activities";
import Contact from "../components/Contact"
import SkillsSolarSystem from "../components/SkillsSolarSystem";
import RecruiterAssistant from "../components/RecruiterAssistant";

function Home(){
    return(
        <div>
            <Navbar/>
            <About/>
            <RecruiterAssistant/>
            <Education/>
            <Experience/>
            <Projects/>
            <Activities/>
            <SkillsSolarSystem/>
            <Contact/>
        </div>
    )
}

export default Home