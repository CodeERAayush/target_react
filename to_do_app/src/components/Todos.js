import React from 'react'
import { List,ListItem,ListItemText } from '@mui/material'
import './Todo.css'
function Todos(props) {
  return (
    <div className='list_holder'>
        {/* <li>{props.todo}</li> */}

        <List dense="true" className='todo_holder'>
                <ListItem>
                  <ListItemText
                    primary={props.todo}
                    secondary="Complete Today 👹"
                  />
                </ListItem>
            </List>


    </div>
  )
}

export default Todos
