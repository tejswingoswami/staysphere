import { useState } from "react"
import API from "../api/api"

export default function Booking() {

  const [booking, setBooking] = useState({

    name: "",
    email: "",
    destination: "",
    guests: ""

  })

  const handleChange = (e) => {

    setBooking({
      ...booking,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async () => {

    try {

      await API.post("/booking", booking)

      alert("Booking Confirmed Successfully!")

      setBooking({
        name: "",
        email: "",
        destination: "",
        guests: ""
      })

    }

    catch (error) {

      alert("Error Saving Booking")

    }

  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "60px 20px",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            color: "#111827",
            marginBottom: "35px",
            textAlign: "center",
            fontSize: "42px"
          }}
        >
          Complete Your Booking
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={booking.name}
            onChange={handleChange}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px"
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={booking.email}
            onChange={handleChange}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px"
            }}
          />

          <input
            type="text"
            placeholder="Destination"
            name="destination"
            value={booking.destination}
            onChange={handleChange}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px"
            }}
          />

          <input
            type="number"
            placeholder="Number of Guests"
            name="guests"
            value={booking.guests}
            onChange={handleChange}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "16px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  )
}