import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Dashboard from './Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
    const [name, setName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [verifyPassword, setVerifyPassword] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [technology, setTechnology] = ("Javascript")
    const navigate = useNavigate();
    let count = 4
    const Abled=(count)=>{
        if(count===4){navigate("/Dashboard")}}
    const Submit = () => {
        if (name.length === 0) {
            count-=0.5
            alert("Username is empty")
        }
        else if (name.length<5 || name.length>15){
                  count-=0.5
            alert("username is not in the range")
        }
        if (password.length===0){
            count-=0.5
            alert("password is empty")
        }
        if (verifyPassword.length===0){
            count-=0.5
            alert("confirm password is empty")
        }
        if (password!==verifyPassword){
            count-=0.5
            alert("both passwords are not matching")
        }
        if (email.length===0){
            count-=0.5
            alert("Email is empty")
        }
        else if (!email.includes("@.")){
            count-=0.5
            alert("email is not correct")
        }
        Abled(count)
    }
    return (
        <div>
            <form>
            <h3>Username  <input type="text" placeholder='Enter Username' onChange={(e) => {
                    setName(e.target.value)
                }}></input></h3>
                <h3>Password  <input type="password" placeholder='Enter Password' onChange={(e) => {
                    setPassword(e.target.value)
                    
                }}></input></h3>
                <h3>Confirm Password  <input type="password" placeholder='Enter Password' onChange={(e) => {
                    setVerifyPassword(e.target.value)
                    
                }}></input></h3>
                <h3>Email  <input type="email" placeholder='Enter Email' onChange={(e) => {
                    setEmail(e.target.value)
                }}></input></h3>
                <h3>Technologies  <select name="Technology" onChange={(e) => {
                    setTechnology(e.target.value)
                }}>
                    <option value="Javascript">Javascript</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Scala">Scala</option>
                    <option value="Spark">Spark</option>
                </select></h3>
                <button onClick={() => { Submit() }}>Submit</button>

            </form>
            <ToastContainer
                position="top-right"
                autoClose={15000} />
        </div>
    )
}

export default Signup;