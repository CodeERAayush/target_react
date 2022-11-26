import './App.css';
import React from 'react';
import { Button,TextField } from '@mui/material';
import Todos from './components/Todos';
import db  from './firebase';
import {collection,getDocs,addDoc,updateDoc,doc, deleteDoc}from 'firebase/firestore'
function App() {

  const [todos, setTodos] = React.useState([]);
  // const [tasks,setTasks]=React.useState([]);
  const [input, setInput] = React.useState("");


  React.useEffect(()=>{
    db.collection('todos').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data().todos))
    })
  },[])

const todoRef=collection(db,"todos");

  

      const addUser=async()=>{
        await addDoc(todoRef,{todos:input})
        };
  
  const AddTodo = (event) => {


    // used to prevent the refrsh of the event when submitting !
    event.preventDefault();

db.collection('todos').add({
  todos:input
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
            todo={todo}
            // task={tasks}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
