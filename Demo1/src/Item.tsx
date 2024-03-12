import React from "./React";
export default function(props){
  let func = (e)=>{
    let target = e.currentTarget as HTMLInputElement;
    alert(target.innerText);
  }
    return (
      <li onClick={func}>Hello：{props.data}</li>
    );
};