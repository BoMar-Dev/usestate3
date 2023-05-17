import { useState } from "react"

const Counter = () => {

    const [value, setValue] = useState(0);

  
  
    const plus = () =>{
      // setValue(value + 1) 
      setTimeout(()=>{
        console.log('button is clicked');
  
          setValue((currentState )=>{
          return currentState + 1
        });
      }, 3000)
        
    };
  
    const reset = () =>{
      setValue(0)
    };
  
    return (
      <div className="container">
        <p> useState counter  with  "setTimeout"  3sec</p>
        <h1> count = <span>{value}</span> </h1>
        <button className="increas btn" onClick={plus}>Increas +</button>
        <button className="reset btn" onClick={reset}>RESET</button>
      </div>
    )
    
}
export default Counter;


