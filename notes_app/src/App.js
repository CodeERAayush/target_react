import logo from './logo.svg';
import './App.css';
import Split from 'react-split'
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
function App() {
  return (
    <div>
      
<Split
sizes={[30,70]}
direction="horizontal"
className='split'>


<Sidebar/>
<Notes/>

</Split>


    </div>
  );
}

export default App;
