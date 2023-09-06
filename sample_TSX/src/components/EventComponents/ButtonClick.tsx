type buttonProp={
    handleClick: (e : React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function ButtonClick(props:buttonProp) {
    const id= Math.floor(Math.random())
  return (
    <div>
      <button onClick={e=>props.handleClick(e,id)}>Click For Event</button>
    </div>
  )
}

export default ButtonClick
