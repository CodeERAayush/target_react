import logo from './logo.svg';
import './App.css';
import React from 'react'
import Axios from 'axios'
function App() {

const [getAge,setAge]=React.useState({
  age:"",
  name:""
});
const [name,setName]=React.useState("");

React.useEffect(()=>{

  // Axios.get("https://api.agify.io/?name=Aayush")
  // .then((res)=>{
  //  setAge(res.data.age);
  // })
getTheAge()

},[]);


function getTheAge(){
  Axios.get(`https://api.agify.io/?name=${name}`)
  .then((res)=>{
   setAge({age:res.data.age,
           name:res.data.name
          })
  })
}

  return (
    <>
    <div>
      <center>
<div>
  <input
  placeholder='Enter Name'
  onChange={(event)=>{
setName(event.target.value);
  }}
  ></input>
</div>
<div>
      <button onClick={getTheAge}>
        Get Age!
      </button>
      </div>

<div>
      <h1>
       The  Age of  {getAge.name} is : {getAge.age}
      </h1>
</div>



      </center>
    </div>
    </>
  );
}

export default App;
