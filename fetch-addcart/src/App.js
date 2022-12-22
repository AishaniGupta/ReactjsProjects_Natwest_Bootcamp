import React,{useEffect,useState} from 'react';
import AddCart from './Addcart';
import {Routes, Route, Link} from "react-router-dom"

function App(){

  const [data,setData]  = useState([])
  const getData=async()=>{
    const Response = await fetch('https://fakestoreapi.com/products')
    const Result = await Response.json();
    setData(Result)

  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div>

      <Routes>
          <Route exact path="*" element={<App/>} />
          <Route exact path="AddCart" element={<AddCart/>} />
      </Routes>
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="AddCart">Cart</Link></button>
        </div>
      

      {
        data.map((item,index)=>{
          return(
            <div key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <img src={item.image} width="100" height="100" alt="img"></img><br></br>
              <button>${item.price}</button>
              <button>Add</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;