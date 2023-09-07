interface inputProp{
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


export const InputOnChange=(props:inputProp)=>{
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);    
    }
    return <input type="text"  value={props.value} onChange={handleInputChange}/>
}