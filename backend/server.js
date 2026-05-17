import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
)
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/staysphere")
.then(() => {
  console.log("MongoDB Connected")
})
.catch((error) => {
  console.log(error)
})

const bookingSchema = new mongoose.Schema({

  name: String,
  email: String,
  destination: String,
  guests: Number

})

const Booking = mongoose.model("Booking", bookingSchema)
const userSchema = new mongoose.Schema({

  name: String,
  email: String,
  password: String

})

const User = mongoose.model("User", userSchema)

app.get("/", (req, res) => {
  res.send("StaySphere Backend Running")
})

app.post("/booking", async (req, res) => {

  try {

    const newBooking = new Booking(req.body)

    await newBooking.save()

    res.status(201).json({
      message: "Booking Saved"
    })

  }

  catch (error) {

    res.status(500).json({
      message: "Error saving booking"
    })

  }

})

app.get("/bookings", async (req, res) => {

  try {

    const bookings = await Booking.find()

    res.json(bookings)

  }

  catch (error) {

    res.status(500).json({
      message: "Error fetching bookings"
    })

  }

})
app.post("/register", async (req, res) => {

  try {

    const existingUser = await User.findOne({
      email: req.body.email
    })

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      })

    }

    const newUser = new User(req.body)

    await newUser.save()

    res.status(201).json({
      message: "Registration Successful"
    })

  }

  catch (error) {

    res.status(500).json({
      message: "Registration Failed"
    })

  }

})

app.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })

    if (!user) {

      return res.status(400).json({
        message: "Invalid Credentials"
      })

    }

    res.json({
      message: "Login Successful"
    })

  }

  catch (error) {

    res.status(500).json({
      message: "Login Failed"
    })

  }

})
app.listen(5000, () => {
  console.log("Server running on port 5000")
})
app.delete("/booking/:id", async (req, res) => {

  try {

    await Booking.findByIdAndDelete(req.params.id)

    res.json({
      message: "Booking Deleted"
    })

  }

  catch (error) {

    res.status(500).json({
      message: "Error deleting booking"
    })

  }

})