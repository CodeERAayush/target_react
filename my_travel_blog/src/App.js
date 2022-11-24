import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BlogPage from './components/Blogpage';
import dataBook from './dataBook';
import newComp from './components/newComp';

function App() {

const data=dataBook.map(item=>{
  return (
    <BlogPage
   
    key={item.id}
    {...item}
   />
  )
})

  return (
    <>
   <Navbar/>
   <div className='holder'>
   {data}
   </div>

    </>
  );
}

export default App;
