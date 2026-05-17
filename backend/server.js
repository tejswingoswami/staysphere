import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = mongoose.model("User", UserSchema)

app.get("/", (req, res) => {
  res.send("StaySphere Backend Running")
})

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    const user = new User({
      name,
      email,
      password
    })

    await user.save()

    res.status(201).json({
      message: "Registration successful"
    })
  } catch (error) {
    res.status(500).json({
      message: "Registration failed"
    })
  }
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email, password })

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials"
      })
    }

    res.status(200).json({
      message: "Login successful",
      user
    })
  } catch (error) {
    res.status(500).json({
      message: "Login failed"
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})