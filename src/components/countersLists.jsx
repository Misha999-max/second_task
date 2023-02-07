import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0,value:0,name:"ненужная вещь"},
        {id:1,value:1,name:"ложка"},
        {id:2,value:2,name:"вилка"},
        {id:3,value:2,name:"тарелка"},
        {id:4,value:10,name:"лошадь"}
    ]
    const [counters,setCounters] = useState(initialState)
    console.log(counters)

    const hendleIncrement = (id) => {  
        const newStateIncrementValue = [...counters]
        const incrementValue  = newStateIncrementValue.find(item => item.id === id)
        incrementValue.value++
       // console.log(newStateUpgrate)      
        setCounters(newStateIncrementValue)
    }

    const hendleDicrement = (id) => {        
        const newStateDicrementValue = [...counters]
        const incrementValue  = newStateDicrementValue.find(item => item.id === id)
        incrementValue.value--     
        setCounters(newStateDicrementValue)  
    }
    const handleDelete = (id) => {
        setCounters(counters.filter(count=> count.id !== id ))
    }
    return(
    <>
       {counters.map(count => <Counter
                key={count.id}
                {...count}
                onIncrement={hendleIncrement}
                onDicrement={hendleDicrement}
                onDelete={handleDelete}
                />)}
    </>
    )
}

export default CountersList