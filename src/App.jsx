import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import User from "./components/User"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id/:type" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
