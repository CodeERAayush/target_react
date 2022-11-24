import logo from './logo.svg';
import './App.css';
import FetchCat from './FetchCat';
function App() {
  return (
    <div>
     <FetchCat
     getUrl="https://catfact.ninja/fact"/>
    </div>
  );
}

export default App;
