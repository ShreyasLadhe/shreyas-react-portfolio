import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </div>
}

export default App
