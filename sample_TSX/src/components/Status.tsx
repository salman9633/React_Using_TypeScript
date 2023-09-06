type statusProp={//Using UNION : so here you can only pass either of this three values through the status else it will show error 
    status:'loading'|"success"|'error'
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
