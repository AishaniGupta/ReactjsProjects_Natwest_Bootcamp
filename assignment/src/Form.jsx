import './App.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [userName,setUserName]=useState("")
  const [showError,setShowError]=useState("")
  const navigate= useNavigate()
  const Submit=()=>{
    {navigate("Routing")}
  }
  const changeValue=()=>{
    if (userName.length===0){
      setShowError("UserName is Empty")
    }
    else if (userName.length<5 || userName.length>15){
      setShowError("UserName is out of range")
    }
    else{
      setShowError("")
    }
  }
  useEffect(()=>{
    changeValue()
  },[userName])
  return (
    <>
    <form>
      <h3>Username <input type="text" placeholder='Username' onChange={(e)=>{
        setUserName(e.target.value)
      }}></input></h3>
      <h6 id="Error">{showError}</h6>
    </form>
    <button onClick={Submit}>Submit</button>
    </>
  );
}

export default Form;
