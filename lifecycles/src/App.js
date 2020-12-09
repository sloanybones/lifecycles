import React from "react"
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import GiftRandomizer from './Ian/GiftRandomizer';

class App extends React.Component {

  state = {
    members:[
    {id:1, name: "Beth"},
    {id:2, name: "Stu"},
    {id:3, name: "Ryan"},
    ]
  }
  render(){
    const { gifts } = this.state;
    return (
    <Container >
      <Header>Life Cycles</Header>
      <GiftRandomizer gifts= {this.state.members}
                      test = "sdfsdf"/>
    </Container>
    )
  }
}

export default App;
