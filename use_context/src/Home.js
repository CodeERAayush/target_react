import { AppContext } from "./App"
import React from 'react'
export const Home=()=>{
    const {name} = React.useContext(AppContext);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
    }