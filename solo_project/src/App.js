import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import UnderContent from './UnderContent';
import Cardview from './Cardview';
import cardViewData from './cardViewData';
import textArea from './textArea';
function App() {
  const getcardViewData=cardViewData.map(card=>{
   return <Cardview 
    name={card.name}
    text1={card.text}
text2={card.text2}
/>
  })
  return (
      <>
     <NavBar/>
     <div className='contact_info'>
{getcardViewData}
{/* // <Cardview
// name="Aayush"
// text1="het this is a cat"
// text2="7860654567"/>
// <Cardview
// name="Piyush"
// text1="het this is a cat"
// text2="7860654567"/>
// <Cardview
// name="Shikhar"
// text1="het this is a cat"
// text2="44444445556"/>
// <Cardview
// name="Aayush"
// text1="het this is a cat"
// text2="7860654567"/> */}
</div>
     </>
  );
}

export default App;
