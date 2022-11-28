import logo from './logo.svg';
import './App.css';
import { ReactDOM,React } from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { Contact } from './Contact';
import { ErrorPg } from './ErrorPg';
import { NavBar } from './NavBar';


export const AppContext=React.createContext();


function App() {
const [name,setName]=React.useState("Aayush");


  return (
    <div className='App'>
      <AppContext.Provider value ={{name,setName}}>
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<ErrorPg/>}/>
    </Routes>
    </Router>
    </AppContext.Provider>
    </div>
  );
}

export default App;
