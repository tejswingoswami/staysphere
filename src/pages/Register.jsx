import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../api/api"

export default function Register() {

  const navigate = useNavigate()

  const [user, setUser] = useState({

    name: "",
    email: "",
    password: ""

  })

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  const handleRegister = async () => {

    try {

      const response = await API.post("/register", user)

      alert(response.data.message)

      localStorage.setItem("isLoggedIn", "true")

      navigate("/booking")

    }

    catch (error) {

      alert(error.response.data.message)

    }

  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#111827",
            fontSize: "35px"
          }}
        >
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "16px"
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "16px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "16px"
          }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "14px",
            background: "#111827",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Register
        </button>

      </div>

    </div>
  )
}