import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const properties = [

    {
      id: 1,
      title: "Luxury Villa",
      location: "Goa",
      price: "₹5,000/night",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },

    {
      id: 2,
      title: "Beach Paradise Resort",
      location: "Goa",
      price: "₹7,500/night",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },

    {
      id: 3,
      title: "Ocean Breeze Hotel",
      location: "Goa",
      price: "₹4,800/night",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      id: 4,
      title: "Mountain Cabin",
      location: "Manali",
      price: "₹3,500/night",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },

    {
      id: 5,
      title: "Snow Peak Resort",
      location: "Manali",
      price: "₹6,200/night",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },

    {
      id: 6,
      title: "Himalayan Retreat",
      location: "Manali",
      price: "₹5,900/night",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },

    {
      id: 7,
      title: "Royal Palace Stay",
      location: "Jaipur",
      price: "₹8,500/night",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },

    {
      id: 8,
      title: "Pink City Hotel",
      location: "Jaipur",
      price: "₹4,400/night",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
    },

    {
      id: 9,
      title: "Heritage Haveli",
      location: "Jaipur",
      price: "₹9,200/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },

    {
      id: 10,
      title: "Lake View Cottage",
      location: "Udaipur",
      price: "₹6,000/night",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      id: 11,
      title: "Royal Lake Resort",
      location: "Udaipur",
      price: "₹7,300/night",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },

    {
      id: 12,
      title: "City Apartment",
      location: "Mumbai",
      price: "₹4,200/night",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },

    {
      id: 13,
      title: "Skyline Hotel",
      location: "Mumbai",
      price: "₹8,000/night",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      id: 14,
      title: "Sea View Residency",
      location: "Mumbai",
      price: "₹6,700/night",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
    },

    {
      id: 15,
      title: "Desert Camp",
      location: "Jaisalmer",
      price: "₹3,200/night",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },

    {
      id: 16,
      title: "Golden Sand Resort",
      location: "Jaisalmer",
      price: "₹5,100/night",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }

  ]

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          minHeight: "600px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "40px 20px"
        }}
      >

        <h1
          style={{
            color: "white",
            fontSize: "clamp(36px, 6vw, 58px)",
            fontWeight: "bold",
            textShadow: "2px 2px 15px rgba(0,0,0,0.7)",
            maxWidth: "900px",
            lineHeight: "1.3",
            marginBottom: "25px"
          }}
        >
          Find Your Perfect Luxury Stay
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "clamp(16px, 3vw, 22px)",
            textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
            maxWidth: "750px",
            lineHeight: "1.8",
            marginBottom: "35px"
          }}
        >
          Discover beautiful hotels, villas, resorts and premium stays around the world with StaySphere
        </p>

        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "14px",
            width: "90%",
            maxWidth: "700px",
            display: "flex",
            gap: "15px",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.15)"
          }}
        >

          <input
            type="text"
            placeholder="Search Goa, Jaipur, Mumbai, Manali..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              fontSize: "16px",
              outline: "none"
            }}
          />

          <button
            style={{
              padding: "15px 25px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Search
          </button>

        </div>

      </div>

      <div style={{ padding: "70px 20px" }}>

        <h1
          style={{
            marginBottom: "45px",
            color: "#111827",
            fontSize: "clamp(30px, 5vw, 40px)"
          }}
        >
          Available Properties
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px"
          }}
        >

          {filteredProperties.map((property) => (

            <div
              key={property.id}

              onClick={() => navigate("/property")}

              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)"
              }}

              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)"
              }}

              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.12)",
                transition: "0.3s",
                cursor: "pointer"
              }}
            >

              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "22px" }}>

                <h2
                  style={{
                    color: "#111827",
                    marginBottom: "10px"
                  }}
                >
                  {property.title}
                </h2>

                <p
                  style={{
                    color: "#4b5563",
                    marginBottom: "12px",
                    fontSize: "17px"
                  }}
                >
                  📍 {property.location}
                </p>

                <h3
                  style={{
                    color: "#111827",
                    marginBottom: "18px"
                  }}
                >
                  {property.price}
                </h3>

                <button
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#111827",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}