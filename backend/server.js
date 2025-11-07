import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// App Config
const app = express()
const port =  4000


// Middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://VisithaVR:<db_password>@cluster0.dh3larw.mongodb.net/?appName=Cluster0