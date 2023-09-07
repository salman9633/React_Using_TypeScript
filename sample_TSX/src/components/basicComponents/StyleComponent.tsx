
type styleProp={
    styles:React.CSSProperties
}

function StyleComponent(props:styleProp) {
  return (
    <div style={props.styles}> Styling Applicable to this Text 
    </div>
  )
}

export default StyleComponent
