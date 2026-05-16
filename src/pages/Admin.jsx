import { useEffect, useState } from "react"
import API from "../api/api"

export default function Admin() {

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

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: "45px",
          color: "#111827",
          marginBottom: "40px"
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginBottom: "50px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2
            style={{
              color: "#6b7280",
              marginBottom: "15px"
            }}
          >
            Total Bookings
          </h2>

          <h1
            style={{
              color: "#111827",
              fontSize: "45px"
            }}
          >
            {bookings.length}
          </h1>

        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2
            style={{
              color: "#6b7280",
              marginBottom: "15px"
            }}
          >
            Active Users
          </h2>

          <h1
            style={{
              color: "#111827",
              fontSize: "45px"
            }}
          >
            128
          </h1>

        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2
            style={{
              color: "#6b7280",
              marginBottom: "15px"
            }}
          >
            Properties Listed
          </h2>

          <h1
            style={{
              color: "#111827",
              fontSize: "45px"
            }}
          >
            16
          </h1>

        </div>

      </div>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
        }}
      >

        <h2
          style={{
            marginBottom: "30px",
            color: "#111827"
          }}
        >
          Recent Bookings
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          {bookings.map((booking) => (

            <div
              key={booking._id}
              style={{
                padding: "20px",
                background: "#f9fafb",
                borderRadius: "12px"
              }}
            >

              <h3
                style={{
                  marginBottom: "10px",
                  color: "#111827"
                }}
              >
                {booking.name}
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "8px"
                }}
              >
                📧 {booking.email}
              </p>

              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "8px"
                }}
              >
                📍 {booking.destination}
              </p>

              <p
                style={{
                  color: "#4b5563"
                }}
              >
                👥 Guests: {booking.guests}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}