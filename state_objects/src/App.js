import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {

const [state, setstate] = React.useState({

  Name:"Aayush Pandey",
  Phone:7860456546,
  Email:"aayushpandey1100@gmail.com",
  isFavourite:false

});

function toggleFavorite(){
  setstate(prevstate=>({
    ...prevstate,
    isFavourite:!prevstate.isFavourite
  }))
}

let bool = state.isFavourite ? "glow_star.png":"star.png"


  return (
    <div className="App">
      <article className="card">
                <img src="./images/contact.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${bool}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        { state.Name
                         }
                    </h2>
                    <p className="card--contact">{state.Phone}</p>
                    <p className="card--contact">{state.Email}</p>
                </div>
                
            </article>
    </div>
  );
}

export default App;
