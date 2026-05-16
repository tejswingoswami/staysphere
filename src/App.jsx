import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PropertyDetails from "./pages/PropertyDetails"
import Booking from "./pages/Booking"
import Bookings from "./pages/Bookings"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/property" element={<PropertyDetails />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/bookings" element={<Bookings />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App