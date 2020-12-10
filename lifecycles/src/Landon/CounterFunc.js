import { useEffect, useState } from "react"
import { Button } from "semantic-ui-react"

export default (props) => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("You have ^ kids")

  const addAKid = () => {
    setCounter(counter+1)
  }

  useEffect(()=> {
    console.log("mounted")
    if (counter >= 10) {
      setMessage("You have too many kids")
    }
  },[counter])

  return (
    <div>
      <Button onClick = {() => addAKid()}>Add</Button>
      <p>{counter}</p>
      <p>{message}</p>
    </div>
  )
}
