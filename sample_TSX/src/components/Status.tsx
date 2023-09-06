type statusProp={
    status:string
}

function Status(props:statusProp) {
    let message
    if(props.status==='loading') message='Loading....'
    else if(props.status==='success') message='Data Fetched Successfully'
    else if(props.status==='error') message='Error fetching Data'
  
    return (
    <div>
      <h2>
        status = {message}
      </h2>
    </div>
  )
}

export default Status
