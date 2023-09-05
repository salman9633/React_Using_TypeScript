
type personProp={
    personName:{
        first:string, 
        last:string, 
    }
}

export const Person=(props:personProp)=>{
    return(
        <h4>
            {props.personName.first}{props.personName.last}
        </h4>
    )
}