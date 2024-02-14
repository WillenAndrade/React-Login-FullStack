const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const app = express()

const port = 3001

app.use(express.json())
app.use(cors())
app.use(routes)

app.get("/", (req, res )=> {
    res.send("Believe in your dreams!")
})

app.listen(port, ()=> {
    console.log(`Server Running at port: http://localhost:${port}`)
})
