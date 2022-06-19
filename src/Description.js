const Description=(props)=>{
    return (
        <div>
            <h3>Description</h3>
            {Object.keys(props.desc).map(key => <p>{key} : {props.desc[key]}</p>)}
        </div>
    )
}
export default Description;