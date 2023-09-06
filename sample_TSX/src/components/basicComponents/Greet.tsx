type greetType={
    name:string,
    online?:number //making the online variable optional
}

export const Greet=(props:greetType)=>{
   
    return (
        <div>
            <h2>
                HELLO!!! This Is {props.name}
            </h2>
            <p>
                Last Online {props.online} PM
            </p>
        </div>
    )
}