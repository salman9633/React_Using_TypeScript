import React from 'react'
import '../App.css'
import { Greet } from '../components/basicComponents/Greet'
import { Person } from '../components/basicComponents/Person'
import PersonList from '../components/basicComponents/personList'
import Status from '../components/basicComponents/Status'
import { Heading } from '../components/basicComponents/Heading'
import Oscar from '../components/basicComponents/Oscar'
import { Link } from 'react-router-dom'

function Basic() {
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
      <div>
      <Link to="/events">Go to Events Page</Link>
      </div>
    </>
    
  )
}

export default Basic
