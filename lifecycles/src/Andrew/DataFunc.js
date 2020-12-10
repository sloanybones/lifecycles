import Axios from "axios";
import {useState} from "react"
import {useEffect} from "react"
import { Dimmer, Loader } from "semantic-ui-react";


const DataFunc = () => {

  const [data, setData] = useState([])
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    Axios.get("https://reqres.in/api/users?delay=3")
    .then((res)=>{
      setData(res.data.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })

  },[])

  const renderData = () => {
    console.log(data)
    return data.map((each)=>{ 
      return (
        <p key = {each.id}>
        {each.first_name} {each.last_name}
        </p>
        ) 
      })
  }

  const renderLoader = () => {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
  }

  return (
    <div>
      <h1>List of Names</h1>
      {/* {loading && renderLoader()} */}
      {loading && renderLoader()}
      <div>
        {renderData()}
      </div>
    </div>
  )
}




export default DataFunc