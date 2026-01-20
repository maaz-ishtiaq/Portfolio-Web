import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MiniProjects from "./pages/MiniProjects"
import Skill from "./pages/Skill"
import EducationPage from "./pages/EducationPage"
import ContactUs from "./pages/ContactUs"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<MiniProjects />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
