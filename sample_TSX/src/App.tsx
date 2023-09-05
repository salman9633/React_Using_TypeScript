
import { Greet } from "../src/components/Greet.tsx"; 
import { Person } from "../src/components/Person.tsx"; 
import './App.css'

function App() {
  const name ={
    first:'salman',
    last:'faris',
  }

  return (
    <>
      <Greet name={'Salman Faris'} online={10}></Greet>
      <Person personName={name}></Person>
    </>
  )}

export default App
