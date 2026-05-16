import { useNavigate } from "react-router-dom"

export default function PropertyDetails() {

  const navigate = useNavigate()

  return (

    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          style={{
            width: "100%",
            height: "clamp(250px, 50vw, 500px)",
            objectFit: "cover"
          }}
        />

        <div style={{ padding: "40px" }}>

          <h1
            style={{
              color: "#111827",
              marginBottom: "15px",
              fontSize: "clamp(30px, 6vw, 45px)"
            }}
          >
            Luxury Villa
          </h1>

          <p
            style={{
              color: "#4b5563",
              fontSize: "20px",
              marginBottom: "20px"
            }}
          >
            📍 Goa, India
          </p>

          <h2
            style={{
              color: "#111827",
              marginBottom: "20px"
            }}
          >
            ₹5,000 / night
          </h2>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.8",
              marginBottom: "30px",
              fontSize: "17px"
            }}
          >
            Experience luxury living in this beautiful villa located near the beaches of Goa. Enjoy spacious rooms, private pool, free WiFi, air conditioning and breathtaking views.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "35px",
              flexWrap: "wrap"
            }}
          >

            <div
              style={{
                background: "#e5e7eb",
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: "600"
              }}
            >
              Free WiFi
            </div>

            <div
              style={{
                background: "#e5e7eb",
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: "600"
              }}
            >
              Swimming Pool
            </div>

            <div
              style={{
                background: "#e5e7eb",
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: "600"
              }}
            >
              Air Conditioning
            </div>

            <div
              style={{
                background: "#e5e7eb",
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: "600"
              }}
            >
              Free Parking
            </div>

          </div>

          <button
          onClick={() => {

            const isLoggedIn = localStorage.getItem("isLoggedIn")

            if (isLoggedIn) {

           navigate("/booking")

              }

            else {

            alert("Please Login First")

             navigate("/login")

             }

}}
            style={{
              padding: "16px 35px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Book This Property
          </button>

        </div>

      </div>

    </div>
  )
}