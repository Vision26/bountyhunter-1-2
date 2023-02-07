import React, { useState } from "react"
import BountyInputs from "./components/BountyInputs"


function App() {
  const [bountyArr, setBountyArr] = useState([])

  useEffect(() => {
    axios.get('/bounties')
      .then(res => setBountyArr(res.data))
      .catch(err => console.log(err))
  }, [])

  //axios.post function
  const createBounty = newBounty => {
    axios.post(`/bounties`, newBounty)
      .then(res => setBountyArr(prevBounty => [
        ...prevBounty, res.data
      ]))
      .catch(err => console.log(err))
  }

  //axios.put function
  const editBounty = (updated) => {
    axios.put(`/bounties/${updated.editId}`, updated)
      .then(res => setBountyArr(prevOriginal => prevOriginal.map(prevs => prevs._id !== updated.editId ? prevs : res.data)))
      .catch(err => console.log(err))
    return (
      <div>

        <BountyInputs />


      </div>
    )
  }
}

export default App