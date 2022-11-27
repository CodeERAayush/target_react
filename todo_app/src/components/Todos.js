import React from 'react'
import { List,ListItem,ListItemText,IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteDoc,doc } from 'firebase/firestore';
import './Todo.css'
import db from '../firebase';
function Todos(props) {



  const deleteTodo=async(id)=>{
    const del=doc(db,"todos",id)
    await deleteDoc(del)
  } 




  return (
    <div className='list_holder'>
        {/* <li>{props.todo}</li> */}

        <List dense="true" className='todo_holder'>
                <ListItem>
                  <ListItemText
                    primary={props.todo}
                    secondary="Complete Today 👹"
                  />
                   <IconButton edge="end" aria-label="delete">
                      <HighlightOffIcon 
                      onClick={()=>{deleteTodo(props.id)}}
                      />
                    </IconButton>
                </ListItem>
            </List>


    </div>
  )
}

export default Todos
