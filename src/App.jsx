import About from "./components/About/About"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
  </div>
}

export default App
