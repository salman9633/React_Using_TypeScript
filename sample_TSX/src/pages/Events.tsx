
import ButtonClick from '../components/EventComponents/ButtonClick'
import { InputOnChange } from '../components/EventComponents/inputOnChange';

function Events() {
  return (
    <div>
      <ButtonClick handleClick={(event,id)=>{
        console.log('Button Clicked',event.timeStamp,id);
      }}></ButtonClick>

      <InputOnChange value='' handleChange={(event)=>console.log(event)
      }></InputOnChange>
    </div>
  )
}

export default Events
