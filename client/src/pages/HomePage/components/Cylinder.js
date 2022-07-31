import React, { useRef } from "react";
import './Cylinder.scss'

function Face({i}){
  return <div class="face" style={{"--index": i}}></div>
}
  function Drwa(){
    let html =[];
    for(let i = 0; i < 50; i++){
      html.push(<Face i={i}/>);
    }
    return html;
  }

const Cylinder = ({isActive}) => {

  return <div class="containerCylinder">
    <div class="holder">
      <div class={`cylinder ${!isActive && `pause`}`}>
        <Drwa />
      </div>
    </div>
  </div>
  
};


export default Cylinder;