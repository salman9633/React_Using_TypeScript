type personListType={
    name:{
        firstName:string,
        LastName:string,
    }[]
}


function PersonList(props:personListType) {
  return (
    <div>
      {
        props.name.map((element)=>{
            return (
                <h3>
                    {element.firstName} {element.LastName}
                </h3>
            )
        })
      }
    </div>
  )
}

export default PersonList
