const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bountyList = [
    {
        fname: 'R2',
        lname: 'D2',
        imgUrl:"",
        _id: uuidv4()
    },

    {
        fname: 'Chew',
        lname: 'bacca',
        imgUrl:"",
        _id: uuidv4()
    },

    {
        fname: 'Lord',
        lname: 'Sid',
        imgUrl:"",
        _id: uuidv4()
    }
]

//GET ALL
bountyRouter.get("/", (req, res) => {
    res.send(bountyList)
})
 //GET ONE
bountyRouter.get("/:bountyId", (req, res) => {
const bountyID = req.params.bountyId
const addBounty = bountyList.find(pick => pick._id === bountyID)
res.send(addBounty)
})

bountyRouter.get("/characters/type", (req, res) => {
    const bountyType = req.query.type
    const getSpecificType = bountyList.filter(bounty => bounty.type === bountyType)
    res.send(getSpecificType)
})

bountyRouter.post("/", (req, res) => {
    const add = req.body
    add._id = uuidv4()
    bountyList.push(add)
    res.send(`SUCCESS HOMIE//: ${add.fname} has been posted! Use GET to verify ESE catch you on the streets HOMES...`)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyParams = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bnty => bnty._id === bountyParams)
    bountyList.splice(bountyIndex, 1)
    res.send("Bounty Deleted.")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bntyParam = req.params.bountyId
    const bntyIndex = bountyList.findIndex(bnty => bnty._id === bntyParam)
    const bntyReq = req.body
    const btnyObjectSubmit = Object.assign(bountyList[bntyIndex], bntyReq)
    res.send(btnyObjectSubmit)
})
// bountyRouter.route("/")
// .get((req, res) => {
//     res.send(bountyList)
// })
// .post((req, res) => {
//     const add = req.body
//     add._id = uuidv4()
//     bountyList.push(add)
//     res.send(`SUCCESS//: ${add.fname} has been posted! Use GET to verify...`)
// })
module.exports = bountyRouter