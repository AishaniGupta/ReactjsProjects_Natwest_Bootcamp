import React,{useState,useEffect} from "react";
import './App.css';
const lodash = require('lodash')

function App() {
  const [array,setArray]=useState([])
  const [searchData, setSearchData]=useState("")
  const [filteredData, setFilteredData] = useState([])
  const [billedData, setBilledData] = useState([])
  const getInfo=async()=>{
    const Result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const Data = await Result.json();
    setArray(Data.meals)
    }
    getInfo()
    
    const searchFunction=()=>{
        let filteredDataItem = lodash.filter(array,{"strCategory":searchData})
        setFilteredData(filteredDataItem)
    }

    const billingData=()=>{
        billedData.map((item,index)=>{
          return(
            <div id="Invoice">
              <table>
                <th>Meal Name</th>
                <th>Price</th>
              <tr>
              <td><h5>{item.Meal}</h5></td>
              <td><h5>{item.Price}</h5></td>
              </tr>
              </table>
              <h4>Total Price={billedData.length*500}</h4>
            </div>
          )
        })
      }
  useEffect(()=>{
    getInfo()},[])
  

  return (
    <div id="mainContainer">
      <div id="Header">
          <input type="text" placeholder="Search" id="searchBar" onChange={(e) => {
            setSearchData(e.target.value)
            searchFunction()
          }} />
        </div>
        <div id="App">
        {
          searchData.length>0?filteredData.map((item,index)=>{
            return(
              <div>
                <img src={item.strMealThumb} width="250" height="250" alt="img"></img>
                <h5 id="text">{item.strMeal} ({item.strCategory})</h5>
                <div id="btn"><button id="price">Rs 500</button><button id="add" onClick={()=>{
                  let tempObj={
                    "Meal": item.strMeal,
                    "Price": "Rs 500"
                  }
                  
                  setBilledData(...billedData,tempObj)
                  
                  
                }}>Add</button></div>
              </div>
            )
          }):
          array.map((item,index)=>{
            return(
              <div>
                <img src={item.strMealThumb} width="250" height="250" alt="img"></img>
                <h5 id="text">{item.strMeal} ({item.strCategory})</h5>
                <div id="btn"><button>Rs 500</button><button id="add" onClick={()=>{
                  let tempObj={
                    "Meal": item.strMeal,
                    "Price": "Rs 500"
                  }
                  setBilledData(...billedData,tempObj)
                  console.log(billedData)
                  
                }}>Add</button></div>
              </div>
            )
          })
        }
        
        </div>
        <button id="invoice" onClick={billingData()}>Invoice</button>
    </div>
  );
}

export default App;
