import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import User from "./components/User"
import Testimonial from "./components/Testimonial"
import Navbar1 from "./components/Navbar1"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id/:type" element={<User />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
