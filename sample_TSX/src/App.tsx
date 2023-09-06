
import { Greet } from "../src/components/Greet.tsx"; 
import { Person } from "../src/components/Person.tsx"; 
import './App.css'
import { Heading } from "./components/Heading.tsx";
import Oscar from "./components/Oscar.tsx";
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
      <Heading>TODAY'S NEWS</Heading>
      <Oscar>
        <Heading>
          Oscar Goes to Di Caprio
        </Heading>
      </Oscar>
    </>
  )}

export default App
