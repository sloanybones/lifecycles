import React from "react"
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import GiftRandomizer from './Ian/GiftRandomizer';
import MemberAddForm from "./Ian/MemberAddForm";
import Data from './Andrew/Data';


// class App extends React.Component {

//   state = {
//     members:[
//     {id:1, name: "Beth", partner: ""},
//     {id:2, name: "Stu", partner: ""},
//     {id:3, name: "Ryan", partner: ""},
//     ],
//     showPartner: false,
//   }

//   addMember = (memberData) => {
//     const getId = () => {
//       return Math.floor((1 + Math.random()) * 10000);
//     };
//     let member = {id:getId(), ...memberData}
//     this.setState({members:[member, ...this.state.members],})
//   }

//   assignPartner = (memberData) => {
//     let partners = this.state.members.map((m) => {
//       if (m.id === memberData.id) {
//         return {...memberData, partner: this.state.members[m.id + 1]}
//       }
//       return m
//     })
//     this.setState({members: partners, showPartner: true})
//   }

//   render(){
//     return (
//     <Container >
//       <Header>Life Cycles</Header>
//       <Button onCLick = {this.addMember}/>
//       <GiftRandomizer gifts= {this.state.members}
//                       test = "sdfsdf"/>
//       <MemberAddForm addHandler={this.addMember}/>
//     </Container>
//     )
//   }
// }

function App() {
  return (
    <>
    <Data />
    </>
  );
}

export default App;
