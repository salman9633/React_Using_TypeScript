
import ButtonClick from '../components/EventComponents/ButtonClick'
import { InputOnChange } from '../components/EventComponents/inputOnChange';
import StyleComponent from '../components/basicComponents/StyleComponent';

function Events() {
  return (
    <div>
      <ButtonClick handleClick={(event,id)=>{
        console.log('Button Clicked',event.timeStamp,id);
      }}></ButtonClick>

      <InputOnChange value='' handleChange={(event)=>console.log(event)
      }></InputOnChange>

      <StyleComponent styles={{ color: 'blue', lineHeight : 5, padding: 10}}></StyleComponent>
    </div>
  )
}

export default Events
