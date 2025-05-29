import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import FeatureSection from "./components/FeatureSection.jsx"
import Workflow from "./components/Workflow.jsx"

const App = () => {

  return (
    <>

      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>

    </>
  )
}

export default App
