import React from "react"


const Counter = (props) => {
    const {name,value, onIncrement, onDicrement,onDelete} = props
    const formatCount = () => {
        return value === 0 ? "empty" : value
    }
    const getBageClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }
    
   

    return (
        <div>
            {name}
            <span className={getBageClasses()}>{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => onDicrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>onDelete(props.id)}>Delete</button>
        </div>
    ) 
}

export default Counter