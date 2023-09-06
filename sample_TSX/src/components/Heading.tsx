type headingProp = {
    children: string
}


export const Heading = (props: headingProp) => {
    return (
    <h1>
        {props.children}
    </h1>
    )
}