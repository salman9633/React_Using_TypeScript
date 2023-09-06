
import { Greet } from "../src/components/Greet.tsx";
import { Person } from "../src/components/Person.tsx";
import './App.css'
import { Heading } from "./components/Heading.tsx";
import Oscar from "./components/Oscar.tsx";
import Status from "./components/Status.tsx";
import PersonList from "./components/personList.tsx";

function App() {
  const name = {
    first: 'salman',
    last: 'faris',
  }

  const personList = [
    {
      firstName: 'Salman',
      LastName: 'Faris'
    },
    {
      firstName: 'Lionel',
      LastName: 'Messi'
    },
    {
      firstName: 'Ruben',
      LastName: 'Kazak'
    },
  ]

  return (
    <>
      <Greet name={'Salman Faris'} online={10}></Greet>
      <Person personName={name}></Person> {/* rendering Objects */}
      <PersonList name={personList}></PersonList> {/* rendering Array of Objects */}
      <Status status="success"></Status> {/* optional rendering and use of UNION */}
      <Heading>TODAY'S NEWS</Heading> {/* Handling Child componet's Type */}
      <Oscar>
        <Heading>
          Oscar Goes to Di Caprio {/* Handling React componet's Type */}
        </Heading>
      </Oscar>

      <Greet name={'Salman'} ></Greet> {/* optional Props */}
    </>
  )
}

export default App
