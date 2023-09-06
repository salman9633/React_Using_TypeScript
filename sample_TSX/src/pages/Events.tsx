import React from 'react'
import ButtonClick from '../components/EventComponents/ButtonClick'

function Events() {
  return (
    <div>
      <ButtonClick handleClick={(event,id)=>{
        console.log('Button Clicked',event.timeStamp,id);
      }}></ButtonClick>
    </div>
  )
}

export default Events
