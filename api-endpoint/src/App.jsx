import {useState,useEffect} from "react";
import './App.css';

function App() {
  const [list,setList]= useState([])
  var heading = ['Name', 'Username','Email','Address',' Zipcode','Phone No.', 'Company'];
    useEffect(() => {
      const getData=async()=>{
        let Result = await fetch('https://jsonplaceholder.typicode.com/users')
        Result = await Result.json();
        setList(Result)
        }
      getData()
    },[]);

  return (
    <div>
      <table id="table">
        <thead>
        <tr>{heading.map(head => <th id="tableHead"><b>{head}</b></th>)}</tr>
        </thead>
        <tbody>{
          list.map((item,index)=>{
            return(
              <tr id="tableRow">
              <td><h5>{item.name}</h5></td>
              <td><h5>{item.username}</h5></td>
              <td><h5>{item.email}</h5></td>
              <td><h5>{item.address.city}</h5></td>
              <td><h5>{item.address.zipcode}</h5></td>
              <td><h5>{item.phone}</h5></td>
              <td><h5>{item.company.name}</h5></td>
              </tr>
            )
          })
          }</tbody>
      </table>   
    </div>
  );
}

export default App;
