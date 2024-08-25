import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection"
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"


function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      
    </Routes>
  
    <Footer />
    </>
  )
}

export default App
