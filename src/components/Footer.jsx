export default function Footer() {

  return (

    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "60px 50px 30px 50px",
        marginTop: "60px"
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
          marginBottom: "40px"
        }}
      >

        <div>

          <h1
            style={{
              marginBottom: "20px",
              fontSize: "32px"
            }}
          >
            StaySphere
          </h1>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8"
            }}
          >
            Discover luxury stays, premium resorts, villas and unforgettable travel experiences around the world.
          </p>

        </div>

        <div>

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Quick Links
          </h2>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Home
          </p>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Properties
          </p>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Bookings
          </p>

          <p style={{ color: "#d1d5db" }}>
            Contact
          </p>

        </div>

        <div>

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Popular Locations
          </h2>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Goa
          </p>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Jaipur
          </p>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            Manali
          </p>

          <p style={{ color: "#d1d5db" }}>
            Mumbai
          </p>

        </div>

        <div>

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Contact
          </h2>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            📧 support@staysphere.com
          </p>

          <p style={{ marginBottom: "12px", color: "#d1d5db" }}>
            📞 +91 9876543210
          </p>

          <p style={{ color: "#d1d5db" }}>
            📍 India
          </p>

        </div>

      </div>

      <div
        style={{
          borderTop: "1px solid #374151",
          paddingTop: "25px",
          textAlign: "center",
          color: "#9ca3af"
        }}
      >
        © 2026 StaySphere. All Rights Reserved.
      </div>

    </div>
  )
}