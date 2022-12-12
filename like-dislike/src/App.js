import React,{useState} from "react"
import './App.css';

function App() {
    const [num1,setnum1]=useState(0);
  return (
    <div id="mainContainer">
      <h1>{num1}</h1>
      <button onClick={()=>{
        setnum1(num1+1)
      }}>INCREASE</button>
      <button onClick={()=>{
        if(num1<1){
          setnum1(0)
        }
        else{
          setnum1(num1-1)
        }
      }}>DECREASE</button>
    
    </div>
  );
}

export default App;
