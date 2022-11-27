import './App.css';
import React from 'react';
import { Button,TextField } from '@mui/material';
import Todos from './components/Todos';
import db  from './firebase';
import firebase from 'firebase/compat/app';
import {collection,getDocs,addDoc,updateDoc,doc, deleteDoc, Timestamp}from 'firebase/firestore'
function App() {

  const [todos, setTodos] = React.useState([]);
  // const [tasks,setTasks]=React.useState([]);
  const [input, setInput] = React.useState("");

  const reference=collection(db,'todos');

  React.useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id: doc.id , todos : doc.data().todos})))
    })

// const getTodos=async()=>{
//   const data=await getDocs(reference);
//   console.log(data)
//   setTodos(data.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id
//   })));
// }
// getTodos();

  },[])

const todoRef=collection(db,"todos");

  

      const addUser=async()=>{
        await addDoc(todoRef,{todos:input})
        };
  
  const AddTodo = (event) => {


    // used to prevent the refrsh of the event when submitting !
    event.preventDefault();

db.collection('todos').add({
  todos:input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
      // setTasks([...tasks, sub])
    setInput('')
    // addUser()
    // setSub('')
    // getTodos()
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        {/* <input
          value={input}
          placeholder="Write Todo"
          onChange={event => setInput(event.target.value)}
        /> */}

<TextField id="filled-basic" label="ADD TODO" variant="filled" 
 value={input}
 placeholder="Write Todo"
 onChange={event => setInput(event.target.value)}
/>
      {/* <button type='submit' onClick={AddTodo}>Add Todo!</button> */}
        <Button id='addTodo_btn' disabled={!input} type='submit' variant="outlined" onClick={AddTodo}>Add Todo</Button>
        
      </form>
      <ul>
        {
          todos.map(todo => (
            // <li>{todo}</li>
            <Todos 
            todo={todo.todos}
            id={todo.id}
            // task={tasks}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
