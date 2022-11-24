import Axios from 'axios';
import React from 'react';
export default function FetchCat(props){
 const [catData,setCatData]=React.useState("");


 function getNew(){
    Axios.get(props.getUrl)
    .then((res)=>{
    setCatData(res.data.fact)
    });
 }



 React.useEffect(() => {
    getNew();
    return () => {
        console.log("unmounted!")
    };
 }, []);


    return (
<div>
    <button onClick={getNew}>Get New Cat Fact!</button>
    <h1>{catData}</h1>
</div>
    )
}