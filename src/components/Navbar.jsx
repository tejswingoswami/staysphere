import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate()

  const isLoggedIn = localStorage.getItem("isLoggedIn")

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn")

    alert("Logged Out Successfully")

    navigate("/login")

  }

  return (

    <div
      style={{
        background: "white",
        padding: "18px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        flexWrap: "wrap",
        gap: "15px"
      }}
    >

      <h1
        style={{
          color: "#111827",
          fontSize: "30px",
          margin: "0"
        }}
      >
        StaySphere
      </h1>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600"
          }}
        >
          Home
        </Link>

        <Link
          to="/bookings"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600"
          }}
        >
          Bookings
        </Link>
        <Link
          to="/admin"
         style={{
        textDecoration: "none",
        color: "#374151",
        fontWeight: "600"
          }}
          >
          Admin
        </Link>

        {!isLoggedIn && (

          <>
          
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#374151",
                fontWeight: "600"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#374151",
                fontWeight: "600"
              }}
            >
              Register
            </Link>

          </>

        )}

        {isLoggedIn && (

          <button
            onClick={handleLogout}
            style={{
              padding: "10px 18px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Logout
          </button>

        )}

      </div>

    </div>
  )
}