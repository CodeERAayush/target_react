import React from "react";
import "./cardView.css"
export default function Cardview(props){
   const{name,text1,text2}=props;
    return(
        <div className="allCompo">
 <div className="cards">
   <img className="image" src="../images/ss.png"/>
    <h1 id="heading">{name}</h1>
    <div className="info">
        <p>{text1}</p>
        <p>to Buy : <span id="phone">{props.text2}</span></p>
    </div>

</div>

</div>




    )

}