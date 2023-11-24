import {useMemo, useState} from "react";
const lognCalculate = (value) => {
    let sum = 1
    for (let i =1;i<=1000000000;i++){
         sum = sum+value
    }
    return sum
}

const LongCalculation = (props) =>{
    let sum = 1
    for (let i =1;i<=1000000000;i++){
        sum = sum+props.value
    }
    return(
        <h1>
            calculate : {sum}
        </h1>
    )
}

const UseMemoProblem = () => {
    const [todo, setTodo] = useState(["Todo 1"]);
    const [count, setCount] = useState(100000000);
    // const calculateValue = useMemo(()=>lognCalculate(count),[count])
    // const calculate = 0
    const calculateValue = useMemo(()=>{
        <LongCalculation value = {count} />
    },[count]  )
    const handleTodo = () => {
        setTodo([...todo, "Todo" + (todo.length + 1)]);
    };
    const handleIncrement = () =>{
        setCount(count+1)
    }
    return (
        <div>
            <div>
                {todo.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <div>
                <button onClick={handleTodo}>AddTodo</button>
            </div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={handleIncrement} >
                    Increment
                </button>
            </div>
            <div>
                {calculateValue}
            </div>
        </div>
    );
};

export default UseMemoProblem;
