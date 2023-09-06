import React from "react"

type oscarProps={
    children:React.ReactNode//react components type 
}

function Oscar(props:oscarProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Oscar
