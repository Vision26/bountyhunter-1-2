const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(express.json())
app.use(morgan('dev'))


app.use("/bounties", require("./routes/bountyRouter.js"))


app.listen(7000, () => {
    console.log(`Server is UP and Runnin on host 7000 homie...`)
})
