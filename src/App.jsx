import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import FeatureSection from "./components/FeatureSection.jsx"
import Workflow from "./components/Workflow.jsx"
import Pricing from "./components/Pricing.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {

  return (
    <>

      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>

    </>
  )
}

export default App
