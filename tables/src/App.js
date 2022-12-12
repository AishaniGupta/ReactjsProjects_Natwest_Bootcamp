 import React,{useState} from "react"
 import './App.css';

 function App() {
     const [table,settable]=useState(0);
     const [list,setlist]=useState([]);
   return (
     <div id="table">
       <input type="number" placeholder="Enter your Number" onChange={(e)=>{
         settable(e.target.value)
       }}/>
       <button id="Btn" onClick={()=>{
           let newList=[]
         for(let i=1;i<11;i++){
           newList.push([table," ","X"," ",i," ","="," ",table*i])
         }
         setlist(newList)
       }}>Enter</button>
       {
         list.map((item,index)=>{
           return(
             <div>
               <h4><b>{item}</b></h4>
             </div>
           )
         })
       }
       </div>
   );
 }

 export default App;