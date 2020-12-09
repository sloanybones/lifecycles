import React from "react"
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import GiftRandomizer from './Ian/GiftRandomizer';
import MemberAddForm from "./Ian/MemberAddForm";

class App extends React.Component {

  state = {
    members:[
    {id:1, name: "Beth"},
    {id:2, name: "Stu"},
    {id:3, name: "Ryan"},
    ],
    showPartner: false,
  }

  addMember = (memberData) => {
    const getId = () => {
      return Math.floor((1 + Math.random()) * 10000);
    };
    let member = {id:getId(), ...memberData}
    this.setState({members:[member, ...this.state.members],})
  }

  render(){
    return (
    <Container >
      <Header>Life Cycles</Header>
      <GiftRandomizer gifts= {this.state.members}
                      test = "sdfsdf"/>
      <MemberAddForm addHandler={this.addMember}/>
    </Container>
    )
  }
}

export default App;
