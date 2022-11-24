import logo from './logo.svg';
import './App.css';
import React from 'react';
import{db}from './firebase_config'
import {collection,getDocs,addDoc,updateDoc,doc, deleteDoc}from 'firebase/firestore'
import { async } from '@firebase/util';
function App() {
  const [users, setUsers] = React.useState([]);
  const userCollectionRef=collection(db,"users");


  const [newName,setName]=React.useState("");
  const [newAge,setAge]=React.useState(0);



React.useEffect(() => {
 const getUsers=async()=>{
    const data=await getDocs(userCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id
    })));
 };
 getUsers();
}, []);


const checkUser=async()=>{
await addDoc(userCollectionRef,{Name :newName,Age:Number(newAge)})
};


const updateUser=async(id,age)=>{
  const userDoc=doc(db,"users",id)
const newFields={Age:age+1}
await updateDoc(userDoc,newFields)
}


const deleteUser=async(id)=>{
  const del=doc(db,"users",id)
  await deleteDoc(del)
}


  return (
    <>
    
<input 
placeholder='Name'
onChange={(event)=>{
  setName(event.target.value);
  console.log(event.target.value);
}}
/>


<input
placeholder='Age'
type='number'
onChange={(event)=>{
  setAge(event.target.value);
  console.log();
}}
/>

<button onClick={checkUser}>
  Submit!
</button>


    {users.map((user)=>{
      {console.log(user)}
      return <div>
        {" "}
        <h1>{user.Name}</h1> 
      <h2>{user.Age}</h2>
      <button onClick={()=>{updateUser(user.id,user.Age)}}>Increment Age!</button>
      <button onClick={()=>{
          deleteUser(user.id)
      }}>
            delete!
        </button>
      </div>
     
    })
  }
    </>
  );
}

export default App;
