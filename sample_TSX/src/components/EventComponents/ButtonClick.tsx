type buttonProp={
    handleClick: (e : React.MouseEvent<HTMLButtonElement>)=>void
}

function ButtonClick(props:buttonProp) {
  return (
    <div>
      <button onClick={e=>props.handleClick(e)}>Click For Event</button>
      <div>
        
      </div>
    </div>
  )
}

export default ButtonClick
