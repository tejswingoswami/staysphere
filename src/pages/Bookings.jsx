import { useEffect, useState } from "react"
import API from "../api/api"

export default function Bookings() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {

    fetchBookings()

  }, [])

  const fetchBookings = async () => {

    try {

      const response = await API.get("/bookings")

      setBookings(response.data)

    }

    catch (error) {

      console.log(error)

    }

  }

  const deleteBooking = async (id) => {

    try {

      await API.delete(`/booking/${id}`)

      alert("Booking Deleted")

      fetchBookings()

    }

    catch (error) {

      alert("Error deleting booking")

    }

  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "50px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#111827",
          fontSize: "45px"
        }}
      >
        All Bookings
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px"
        }}
      >

        {bookings.map((booking) => (

          <div
            key={booking._id}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
            }}
          >

            <h2
              style={{
                color: "#111827",
                marginBottom: "15px"
              }}
            >
              {booking.name}
            </h2>

            <p
              style={{
                color: "#4b5563",
                marginBottom: "10px"
              }}
            >
              📧 {booking.email}
            </p>

            <p
              style={{
                color: "#4b5563",
                marginBottom: "10px"
              }}
            >
              📍 {booking.destination}
            </p>

            <p
              style={{
                color: "#4b5563",
                marginBottom: "20px"
              }}
            >
              👥 Guests: {booking.guests}
            </p>

            <button
              onClick={() => deleteBooking(booking._id)}
              style={{
                width: "100%",
                padding: "14px",
                background: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Delete Booking
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}