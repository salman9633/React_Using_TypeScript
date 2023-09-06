
import { Greet } from "../src/components/Greet.tsx"; 
import { Person } from "../src/components/Person.tsx"; 
import './App.css'
import Status from "./components/Status.tsx";
import PersonList from "./components/personList.tsx";

function App() {
  const name ={
    first:'salman',
    last:'faris',
  }

  const personList=[
    {
      firstName:'Salman',
      LastName:'Faris'
    },
    {
      firstName:'Lionel',
      LastName:'Messi'
    },
    {
      firstName:'Ruben',
      LastName:'Kazak'
    },
  ]

  return (
    <>
      <Greet name={'Salman Faris'} online={10}></Greet>
      <Person personName={name}></Person>
      <PersonList name={personList}></PersonList>
      <Status status="success"></Status>
    </>
  )}

export default App
