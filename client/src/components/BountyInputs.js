import React, { useState, useContext } from "react"
import { BountyContext } from "../BountyContext"


function BountyInputs() {
    const { bountyArr, createBounty } = useContext(BountyContext)
    const bountyState = {
        fname: "",
        lname: "",
        imgUrl: ""
    }
    const [state, setState] = useState(bountyState)

    //create HandChange
    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // create handleSubmit
    const handleSubmit = e => {
        e.preventDefault()
        createBounty(state)
        setState(prevBountyState => ({
            fname: prevBountyState.fname = "",
            lname: prevBountyState.lname = "",
            imgUrl: prevBountyState.imgUrl = ""
        }))
    }

    console.log(bountyArr)

    return (
        <div>
            <form name="bountySubmits" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={state.fname}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={state.lname}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="URL"
                    name="imgUrl"
                    value={state.imgUrl}
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>
            </form>

           
        </div>
    )
}


export default BountyInputs