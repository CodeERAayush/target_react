import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Second } from './pages/Second';
import { Error } from './pages/Error';
import { NavBar } from './NavBar';
function App() {
  return (
    <div className="App">
     <Router>

{/* routing through navBar */}

{/* <Link to='/'>Home</Link>
<Link to='/sec'>Second</Link> */}
<NavBar/>


<Routes>

  //routing 

<Route path='/' element={<Home/>}/>
<Route path='/sec' element={<Second/>}/>


//error page

<Route path='*' element={<Error/>}/>



</Routes>
     </Router>
    </div>
  );
}

export default App;
