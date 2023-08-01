const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()
app.use(express.json({}))
app.use(cors())

const apiRoutes = require("./routes")

const PORT = process.env.PORT || 5001

app.use("/api", apiRoutes)

app.listen(PORT, ()=>{console.log("server listening at port", PORT)})