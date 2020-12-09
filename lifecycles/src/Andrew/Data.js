import React from 'react';
import Axios from "axios";


 // {
  //   "id": 1,
  //   "email": "george.bluth@reqres.in",
  //   "first_name": "George",
  //   "last_name": "Bluth",
  //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // }


class Data extends React.Component{
  state = {data: []}

  componentDidMount() {
    console.log("mounted")
    
    Axios.get("https://reqres.in/api/users?delay=3")
    .then((res) => {
      console.log(res)
     this.setState({data: res.data.data}) 
    })
    
    .catch((err)=> {
      console.log(err)
    }
    )
  }
    
  
      
    
    
    
    
    
    render() {
      const {data} = this.state
      console.log(this.state)
      return(
      <>
        <h1>Data</h1>
        
        <ul>
         { data.map( data =>
          <li 
             key={data.id}>
            {data.first_name}
          </li>
           
           )
         }
         </ul>
      </>
      )
      }
    }
    

    
    export default Data; 
